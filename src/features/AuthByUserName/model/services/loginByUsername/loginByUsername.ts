import type { ThunkConfig } from '@/app/providers/Store/';
import { userActions, type User } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';

type loginByUsernameProps = {
    username: string;
    password: string;
};

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, ThunkConfig<string>>(
    'login/fetchByIdStatus',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const responce = await extra.api.post<User>('/login', authData);
            if (!responce.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(responce.data));
            dispatch(userActions.setAuthData(responce.data));
            return responce.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
        }
    }
);
