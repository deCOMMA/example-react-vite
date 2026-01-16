import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { describe, expect, it } from 'vitest';
import { validateProfileError, type ProfileShema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg'
import { updateProfileData } from '../service/updateProfileData/updateProfileData';

const data = {
    username: 'decomma',
    age: 23,
    country: Country.Russia,
    avatar: AvatarImg,
    city: 'Voronezh',
    currency: Currency.RUB,
    firstname: 'Имя',
    lastname: 'Фамилия',
}

describe('profileSlice.test.ts', () => {
    it('test set readonly', () => {
        const state: DeepPartial<ProfileShema> = { readonly: false };
        expect(profileReducer(state as ProfileShema, profileActions.setReadOnly(true))).toStrictEqual(
            { readonly: true }
        );
    });
    it('test set cancelEdit', () => {
        const state: DeepPartial<ProfileShema> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileShema, profileActions.cancelEdit())).toStrictEqual(
            {
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            }
        );
    });
    it('test set updateProfile', () => {
        const state: DeepPartial<ProfileShema> = { form: { username: '123' } };
        expect(profileReducer(state as ProfileShema, profileActions.updateProfile({
            username: '1234'
        }))).toStrictEqual(
            {
                form: { username: '1234' }
            }
        );
    });
    it('test set update profile service pending', () => {
        const state: DeepPartial<ProfileShema> = {
            isLoading: false,
            validateErrors: [validateProfileError.SERVER_ERROR],
        };


        expect(profileReducer(
            state as ProfileShema,
            updateProfileData.pending('')
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });
    it('test set update profile service fulfield', () => {
        const state: DeepPartial<ProfileShema> = {
            isLoading: true,
            validateErrors: [validateProfileError.SERVER_ERROR],
            readonly: false
        };

        expect(profileReducer(
            state as ProfileShema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            data: data,
            form: data,
            readonly: true,
        });
    });
});
