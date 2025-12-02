// casl-ability.factory.ts
import {
  AbilityBuilder,
  PureAbility,
  subject,
  type MatchConditions,
  type MongoQuery,
  mongoQueryMatcher,
} from '@casl/ability';
import { Injectable, Logger } from '@nestjs/common';
import { User } from '../users/interfaces/user.interface';
import { Actions, Subjects, AppAbility } from './types/app-ability.type';
import { UsersService } from 'src/users/users.service';

type AppConditions = MongoQuery;

// Use CASL's built-in Mongo matcher
const conditionsMatcher = mongoQueryMatcher;

@Injectable()
export class CaslAbilityFactory {
  constructor(private readonly userService: UsersService) {}

  private readonly logger = new Logger(CaslAbilityFactory.name);

  async createForUser(user: User): Promise<AppAbility> {
    // Fix 1: Use PureAbility instead of AppConditions in AbilityBuilder
    const { can, cannot, build } = new AbilityBuilder<
      PureAbility<[Actions, Subjects], AppConditions>
    >(PureAbility);

    // Fetch fresh user data
    const fullUser = await this.userService.findById(user.id);
    if (!fullUser) {
      throw new Error(`User not found: ${user.id}`);
    }

    this.logger.debug(`Creating CASL ability for user: ${fullUser.id}`);

    // Check if user is active and has roles
    if (!fullUser.isActive || !fullUser.roles?.length) {
      this.logger.debug(`User ${fullUser.id} is inactive or has no roles`);
      cannot('manage', 'all');
      return build({ conditionsMatcher });
    }

    const userRoles = fullUser.roles;

    // Check for admin privileges
    const hasAdminRole = userRoles.some(
      (role) =>
        role.name.toLowerCase() === 'admin' ||
        role.permissions?.some(
          (p) => p.action === 'manage' && p.subject === 'all',
        ),
    );

    if (hasAdminRole) {
      this.logger.debug(`User ${fullUser.id} has admin role`);
      can('manage', 'all');
      return build({ conditionsMatcher });
    }

    // Process role permissions
    for (const role of userRoles) {
      if (!role.permissions?.length) {
        this.logger.debug(`Role ${role.name} has no permissions`);
        continue;
      }

      this.logger.debug(`Processing role: ${role.name}`);

      for (const permission of role.permissions) {
        const { action, subject: sub, conditions, inverted } = permission;

        // Validate permission data
        if (!action || !sub) {
          this.logger.warn(
            `Invalid permission found: ${JSON.stringify(permission)}`,
          );
          continue;
        }

        this.logger.debug(
          `Processing permission: ${JSON.stringify(permission)}`,
        );

        // Fix 2: Properly handle conditions and inverted permissions
        if (inverted) {
          if (conditions && Object.keys(conditions).length > 0) {
            cannot(
              action as Actions,
              sub as Subjects,
              conditions as AppConditions,
            );
          } else {
            cannot(action as Actions, sub as Subjects);
          }
        } else {
          if (conditions && Object.keys(conditions).length > 0) {
            can(
              action as Actions,
              sub as Subjects,
              conditions as AppConditions,
            );
          } else {
            can(action as Actions, sub as Subjects);
          }
        }
      }
    }

    // Fix 3: Always pass conditionsMatcher to build
    return build({ conditionsMatcher });
  }

  async canUserPerform(
    user: User,
    action: Actions,
    subjects: Subjects,
    resource?: any,
  ): Promise<boolean> {
    try {
      const ability = await this.createForUser(user);

      // Fix 4: Better handling of resource checking
      if (resource) {
        return ability.can(action, subject(subjects, resource));
      }

      return ability.can(action, subjects);
    } catch (error) {
      this.logger.error(
        `Error checking user permissions: ${error.message}`,
        error.stack,
      );
      return false; // Fail safe - deny access on error
    }
  }

  // Additional helper method for checking multiple permissions at once
  async canUserPerformAny(
    user: User,
    permissions: Array<{ action: Actions; subject: Subjects; resource?: any }>,
  ): Promise<boolean> {
    try {
      const ability = await this.createForUser(user);

      return permissions.some(({ action, subject: sub, resource }) => {
        return resource
          ? ability.can(action, subject(sub, resource))
          : ability.can(action, sub);
      });
    } catch (error) {
      this.logger.error(
        `Error checking multiple user permissions: ${error.message}`,
        error.stack,
      );
      return false;
    }
  }

  // Helper method to get all permissions for debugging
  async getUserPermissions(user: User): Promise<string[]> {
    try {
      const ability = await this.createForUser(user);
      return ability.rules.map(
        (rule) =>
          `${rule.inverted ? 'cannot' : 'can'} ${rule.action} ${rule.subject}${
            rule.conditions ? ` where ${JSON.stringify(rule.conditions)}` : ''
          }`,
      );
    } catch (error) {
      this.logger.error(
        `Error getting user permissions: ${error.message}`,
        error.stack,
      );
      return [];
    }
  }
}
