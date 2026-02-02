import type { ThunkConfig } from '@/app/providers/Store/';
import i18n from '@/shared/config/i18n/i18n';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Profile } from '../../types/profile';



export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
    'profile/fetchProfileData', async (profileId, thunkApi) => {

        const { extra, rejectWithValue } = thunkApi

        if (!profileId) {
            return rejectWithValue('error');
        }

        try {
            const responce = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!responce.data) {
                throw new Error();
            }

            return responce.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t('Ошибка загрущки профиля'));
        }
    });
