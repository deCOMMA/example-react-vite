import type { StateSchema } from '@/app/providers/Store';
import type { CommentI } from '@/entities/Comment';
import {
    createEntityAdapter,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit'
import type { ArticleDetailsCommentsSchema } from '../../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: CommentI) => comment.id,

})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState()
);

const initialState: ArticleDetailsCommentsSchema = {
    ...commentsAdapter.getInitialState(),
    isLoading: false,
    error: undefined,
};

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchCommentsByArticleId.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentI[]>) => {
                state.error = undefined;
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
})


export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
