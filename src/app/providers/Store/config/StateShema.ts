import type { CounterSchema } from '@/entities/Counter';
import type { UserShema } from '@/entities/User';
import type { LoginShema } from '@/features/AuthByUserName';
import type { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserShema;
    // async reducers
    loginForm?: LoginShema;
}

export type StateSchemaKey = keyof StateSchema;

export type ReducerManager = {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reduce: (state: StateSchema, action: AnyAction) => any;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
};

export interface ReduxStoreWitnManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}
