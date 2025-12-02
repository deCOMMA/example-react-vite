import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema } from './StateShema';
import { counterReducer } from '@/entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialState,
    });
}
