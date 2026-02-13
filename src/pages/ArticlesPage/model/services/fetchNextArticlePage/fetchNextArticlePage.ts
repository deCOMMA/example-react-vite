import type { ThunkConfig } from '@/app/providers/Store/';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPagePage,
} from '../../selectors/getArticlesPage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { articlePageAction } from '../../slices/articlePageSlice';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;

        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPagePage(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageAction.setPage(page + 1));
            dispatch(fetchArticleList({ page: page + 1 }));
        }
    }
);
