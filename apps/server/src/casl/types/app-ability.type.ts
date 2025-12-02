// app-ability.type.ts
import { PureAbility } from '@casl/ability';
import type { MongoQuery } from '@casl/ability';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
export type Subjects = 'User' | 'Role' | 'Permission' | 'all' | 'visa';

// Use PureAbility with MongoQuery conditions for better type safety
export type AppAbility = PureAbility<[Actions, Subjects], MongoQuery>;
// Helper type for conditions
export type AppConditions = MongoQuery;
// Helper type for subject instances (when checking against specific resources)
export type SubjectType<T = any> = T & { __type?: Subjects };
