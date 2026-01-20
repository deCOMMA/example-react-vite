import type { Article } from "./article"

export type ArticleDetailShema = {
    isLoading: boolean,
    data?: Article,
    error?: string,
}