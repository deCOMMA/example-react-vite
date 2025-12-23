import { createSlice } from "@reduxjs/toolkit";
import type { ProfileShema } from "../types/profile";

const initialState: ProfileShema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice