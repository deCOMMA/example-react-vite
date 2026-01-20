import type { ThunkConfig } from '@/app/providers/Store/';
import i18n from '@/shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articles/fetchArticleById', async (articleId, thunkApi) => {

        const { extra, rejectWithValue } = thunkApi

        try {
            const responce = await extra.api.get<Article>(`/articles/${articleId}`);

            if (!responce.data) {
                throw new Error();
            }

            return responce.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Ошибка загрущки профиля'));
        }
    });
