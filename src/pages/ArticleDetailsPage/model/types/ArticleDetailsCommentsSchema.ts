import type { CommentI } from '@/entities/Comment';
import type { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentI, string> {
    isLoading?: boolean;
    error?: string;
}