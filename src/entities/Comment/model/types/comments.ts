import type { User } from '@/entities/User';

export interface CommentI {
    id: string;
    text: string;
    user: User;
}
