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
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormRudecer } = addCommentFormSlice;
