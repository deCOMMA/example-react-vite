import type { StateSchema } from "@/app/providers/Store";
import { ArticleView } from "@/entities/Article";

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.BLOCK;