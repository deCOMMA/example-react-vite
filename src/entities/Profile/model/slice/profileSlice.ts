import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile, ProfileShema } from "../types/profile";
import { fetchProfileData } from "../service/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../service/updateProfileData/updateProfileData";

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
        setReadOnly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
        },
    },
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
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfileData.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.error = undefined;
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });


    }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice