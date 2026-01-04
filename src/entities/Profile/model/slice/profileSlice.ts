import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile, ProfileShema } from "../types/profile";
import { fetchProfileData } from "../service/fetchProfileData/fetchProfileData";

const initialState: ProfileShema = {
    isLoading: false,
    readonly: true,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });


    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice