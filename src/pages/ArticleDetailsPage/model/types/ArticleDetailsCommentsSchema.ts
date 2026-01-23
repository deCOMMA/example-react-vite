import type { CommentI } from "@/entities/Comment";

export interface ArticleDetailscommentsShema {
    data?: CommentI[],
    isLoading?: boolean,
    error?: string,
}