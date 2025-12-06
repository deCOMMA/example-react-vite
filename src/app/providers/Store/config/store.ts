import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateShema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    });
}
