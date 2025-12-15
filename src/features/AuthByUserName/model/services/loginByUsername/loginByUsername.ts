import { userActions, type User } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type loginByUsernameProps = {
    username: string;
    password: string;
};

export const loginByUsername = createAsyncThunk<
    User,
    loginByUsernameProps,
    { rejectValue: string }
>('login/fetchByIdStatus', async (authData, thunkAPI) => {
    try {
        const responce = await axios.post<User>('http://localhost:8000/login', authData);
        if (!responce.data) {
            throw new Error();
        }
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(responce.data));
        thunkAPI.dispatch(userActions.setAuthData(responce.data));
        return responce.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
});
