import { configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import type { StateSchema } from './StateShema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce as Reducer,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const _store = createReduxStore();

export type AppStore = typeof _store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
