import type { ReduxStoreWitnManager } from '@/app/providers/Store';
import { useAppDispatch } from '@/app/providers/Store/config/hooks';
import type { StateSchemaKey } from '@/app/providers/Store/config/StateShema';
import type { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type DynamicModuleFolderProps = {
    children?: React.ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
};

export const DynamicModuleFolder = (props: DynamicModuleFolderProps) => {
    const { children, reducers, removeAfterUnmount } = props;

    const store = useStore() as ReduxStoreWitnManager;
    const dispatch = useAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, [removeAfterUnmount]);

    return <>{children}</>;
};
