import type { CounterSchema } from '@/entities/Counter';
import type { UserShema } from '@/entities/User';
import type { LoginShema } from '@/features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema;
    user: UserShema;
    loginForm: LoginShema;
}
