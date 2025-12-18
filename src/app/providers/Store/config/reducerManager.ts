import {
    combineReducers,
    type AnyAction,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit';
import type { StateSchema, StateSchemaKey } from './StateShema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers, // возвращаем редюсеры
        reduce: (state: ReducersMapObject<StateSchema>, action: AnyAction) => {
            // обычный редюсер
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return combinedReducer(state as any, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            // добавляем по ключу новый редюсер
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
