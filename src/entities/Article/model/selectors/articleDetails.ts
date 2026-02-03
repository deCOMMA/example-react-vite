import type { StateSchema } from '@/app/providers/Store';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
