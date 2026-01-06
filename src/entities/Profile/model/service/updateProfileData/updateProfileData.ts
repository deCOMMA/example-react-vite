import type { ThunkConfig } from '@/app/providers/Store/';
import i18n from '@/shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';



export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData', async (_, thunkApi) => {

        const { extra, rejectWithValue, getState } = thunkApi

        const formData = getProfileForm(getState())

        try {
            const responce = await extra.api.put<Profile>('/profile', formData);
            return responce.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Ошибка обновления профиля'));
        }
    });
