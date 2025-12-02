import { Actions, Subjects } from 'src/casl/types/app-ability.type';

export interface Permission {
  id: string;
  action: Actions; // 'create', 'read', 'update', 'delete', 'manage'
  subject: Subjects; // 'User', 'Post', 'Comment', 'all'
  conditions?: any; // JSON conditions for attribute-based access
  inverted?: boolean; // for 'cannot' rules
  reason?: string; // optional reason for the permission
}
