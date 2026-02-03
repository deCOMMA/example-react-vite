import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AddCommentFormShema } from '../types/addCommentForm';

const initialState: AddCommentFormShema = {
    text: '',
    error: undefined,
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: builder => {
    //     builder
    //         .addCase(loginByUsername.pending, state => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, state => {
    //             state.error = undefined;
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.error = action.payload;
    //             state.isLoading = false;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormRudecer } = addCommentFormSlice;
