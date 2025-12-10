import type { User } from '@/entities/User';
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
        return responce.data;
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('error');
    }
});
