import type { Article, ArticleView } from "@/entities/Article";
import type { EntityState } from "@reduxjs/toolkit";

export interface ArticlePageShema extends EntityState<Article, string> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView

    page: number;
    limit?: number;
    hasMore: boolean;
}