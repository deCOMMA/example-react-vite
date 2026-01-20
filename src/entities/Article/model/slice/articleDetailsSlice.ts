import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ArticleDetailShema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import type { Article } from '../types/article';

const initialState: ArticleDetailShema = {
    isLoading: true,
    data: undefined,
    error: undefined
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticleById.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
