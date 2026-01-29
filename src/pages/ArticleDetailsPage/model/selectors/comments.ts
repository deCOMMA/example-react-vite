import type { StateSchema } from "@/app/providers/Store"

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error