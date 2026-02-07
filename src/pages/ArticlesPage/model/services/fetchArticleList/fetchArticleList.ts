import type { ThunkConfig } from '@/app/providers/Store/';
import i18n from '@/shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Article } from '@/entities/Article';

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, } = thunkApi;

        try {
            const responce = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'userId',
                }
            });
            if (!responce.data) {
                throw new Error();
            }
            return responce.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Ошибка при загрузке данных статей'));
        }
    }
);
