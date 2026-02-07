import type { StateSchema } from '@/app/providers/Store';
import type { Article } from '@/entities/Article';
import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ArticlePageShema } from '../types/articlesPageSchema';
import { ArticleView } from '@/entities/Article';
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList';
import { ARTICLE_PAGE_VIEW } from '@/shared/const/localstorage';

const articleAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const getArticle = articleAdapter.getSelectors<StateSchema>(
    state => state.articlesPage || articleAdapter.getInitialState()
);

const initialState: ArticlePageShema = {
    ...articleAdapter.getInitialState(),
    isLoading: false,
    error: undefined,
    view: ArticleView.BLOCK,
};


const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState,
    reducers: {
        setView(state, action: PayloadAction<ArticleView>) {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_PAGE_VIEW, action.payload);
        },
        initStat(state) {
            state.view = localStorage.getItem(ARTICLE_PAGE_VIEW) as ArticleView;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticleList.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleList.rejected, (state, acrion) => {
                state.error = acrion.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticleList.fulfilled, (state, acrion: PayloadAction<Article[]>) => {
                state.error = undefined;
                state.isLoading = false;
                articleAdapter.setAll(state, acrion.payload);
            })
    },
});

export const { reducer: articlePageReducer } = articlePageSlice;
export const { actions: articlePageAction } = articlePageSlice;
