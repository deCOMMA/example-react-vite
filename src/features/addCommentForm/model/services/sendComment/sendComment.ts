import type { ThunkConfig } from '@/app/providers/Store/';
import type { CommentI } from '@/entities/Comment';
import { getAuthUserData } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAddCommentFormText } from '../../selectors/addCommentFormSelectors';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { addCommentFormActions } from '../../slice/addCommentFormSlice';

export const sendComment = createAsyncThunk<
    CommentI,
    void,
    ThunkConfig<string>
>('addCommentForm/sendComment', async (_, thunkApi) => {

    const {
        extra,
        rejectWithValue,
        getState,
        dispatch
    } = thunkApi;

    const userData = getAuthUserData(getState());
    const text = getAddCommentFormText(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
        return rejectWithValue('no data')
    }

    try {
        const responce = await extra.api.post<CommentI>('/comments', {
            articleId: article?.id,
            userId: userData.id,
            text: text,
        });
        if (!responce.data) {
            throw new Error();
        }
        dispatch(addCommentFormActions.setText(''))
        return responce.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
});
