import { createSlice } from '@reduxjs/toolkit';
import type { UserShema } from '../types/user';

const initialState: UserShema = {
    authData: {
        id: 1,
        username: 'dsf',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
