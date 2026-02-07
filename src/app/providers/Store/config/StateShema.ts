import type { ArticleDetailShema } from '@/entities/Article';
import type { CounterSchema } from '@/entities/Counter';
import type { ProfileShema } from '@/entities/Profile';
import type { UserShema } from '@/entities/User';
import type { LoginShema } from '@/features/AuthByUserName';
import type { ArticleDetailsCommentsSchema } from '@/pages/ArticleDetailsPage';
import type { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { NavigateOptions, To } from 'react-router-dom';
import type { AddCommentFormShema } from '@/features/addCommentForm';
import type { ArticlePageShema } from '@/pages/ArticlesPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserShema;
    // async reducers
    profile?: ProfileShema;
    loginForm?: LoginShema;
    articleDetails?: ArticleDetailShema;
    articleDetailsComments?: ArticleDetailsCommentsSchema;
    addCommentForm?: AddCommentFormShema;
    articlesPage?: ArticlePageShema;
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

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
