import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from '../../casl/casl-ability.factory';
import { AppAbility } from '../../casl/types/app-ability.type';
import { CHECK_POLICIES_KEY, PolicyHandler } from '../../casl/decorators/policies.decorator';
import { AbilityBuilder } from '@casl/ability';
import { RequestWithUser } from 'src/common/interfaces/request-with-user.interface';

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  private readonly logger = new Logger(PoliciesGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean | never> {
    const handlers = this.reflector.get<PolicyHandler[]>(
      CHECK_POLICIES_KEY,
      context.getHandler(),
    ) ?? [];

    var handlerName = context.getHandler().name;

    this.logger.debug(`Checking policies for handler: ${handlerName}`);
    this.logger.debug(`Policies: ${handlers[0]}`);

    if (handlers.length === 0) {
      this.logger.debug(`No policies defined for handler: ${handlerName}`);
      return true; // No policies defined, allow access
    }

    const { user } = context.switchToHttp().getRequest<RequestWithUser>();
    if (!user) {
      this.logger.debug(`User not authenticated`);
      throw new ForbiddenException('User not authenticated');
    }

    const ability = await this.caslAbilityFactory.createForUser(user);
    this.logger.debug(`Ability created for user: ${user.roles[0].name}`);

    this.logger.debug(`rules: ${ability.rules} ${ability.can('read', 'Role')}`);

    let allowed = false;
    for (const handler of handlers) {
      allowed = await this.execPolicyHandler(handler, ability);
      if (allowed) {
        break;
      }
    }

    this.logger.debug(`User is allowed: ${allowed}`);

    if (!allowed) {
      this.logger.debug(`Insufficient permissions`);
      throw new ForbiddenException('Insufficient permissions');
    }

    this.logger.debug(`User has sufficient permissions`);

    return allowed;
  }

  private async execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
    this.logger.debug(`Executing policy handler: ${handler} ${typeof handler}`);

    if (typeof handler === 'function') {
      return await handler(ability);
    }
    return handler.handle(ability);
  }
}
