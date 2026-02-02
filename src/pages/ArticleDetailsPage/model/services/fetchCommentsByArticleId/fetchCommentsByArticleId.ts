import type { ThunkConfig } from '@/app/providers/Store/';
import i18n from '@/shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { CommentI } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<CommentI[], string | undefined, ThunkConfig<string>>(
    'comments/fetchCommentsByArticleId', async (articleId, thunkApi) => {

        const { extra, rejectWithValue } = thunkApi
        if (!articleId) {
            return rejectWithValue('error');
        }
        try {
            const responce = await extra.api.get<CommentI[]>(`/comments`, {
                params: {
                    articleId,
                    _expand: 'user',
                }
            });

            if (!responce.data) {
                throw new Error();
            }

            return responce.data;
        } catch (e) {
            return rejectWithValue(i18n.t('Ошибка загрузки комментариев'));
        }
    });
