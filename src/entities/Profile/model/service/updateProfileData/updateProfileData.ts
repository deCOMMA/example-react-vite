import type { ThunkConfig } from '@/app/providers/Store/';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { validateProfileError, type Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';



export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<validateProfileError[]>>(
    'profile/updateProfileData', async (_, thunkApi) => {

        const { extra, rejectWithValue, getState } = thunkApi

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors)
        }
        try {
            const responce = await extra.api.put<Profile>('/profile', formData);
            return responce.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([validateProfileError.SERVER_ERROR]);
        }
    });
