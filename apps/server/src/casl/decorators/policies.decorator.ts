import { SetMetadata } from '@nestjs/common';
import { AppAbility, Subjects } from '../types/app-ability.type';
import { subject } from '@casl/ability';

export type PolicyHandler =
  | ((ability: AppAbility) => boolean | Promise<boolean>)
  | { handle: (ability: AppAbility) => boolean | Promise<boolean> };

export type PolicyHandlerCallback = (ability: AppAbility) => boolean;
export type PolicyHandlers = (PolicyHandler | PolicyHandlerCallback)[];

export const CHECK_POLICIES_KEY = 'check_policy';
export const CheckPolicies = (...handlers: PolicyHandler[]) =>
  SetMetadata(CHECK_POLICIES_KEY, handlers.filter(Boolean));

// Convenience decorators for common actions
export const CanCreate = (subject: Subjects) =>
  CheckPolicies((ability: AppAbility) => ability.can('create', subject));

export const CanRead = (subject: Subjects) =>
  CheckPolicies((ability: AppAbility) => ability.can('read', subject));

export const CanReadOwn = (subject: Subjects) =>
  CheckPolicies((ability: AppAbility) => ability.can('read', subject));

export const CanUpdate = (subject: Subjects) =>
  CheckPolicies((ability: AppAbility) => ability.can('update', subject));

export const CanDelete = (subject: Subjects) =>
  CheckPolicies((ability: AppAbility) => ability.can('delete', subject));

export const CanManage = (subject: Subjects) =>
  CheckPolicies((ability: AppAbility) => ability.can('manage', subject));
