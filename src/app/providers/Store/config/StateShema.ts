import type { CounterSchema } from '@/entities/Counter';
import type { UserShema } from '@/entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserShema;
}
