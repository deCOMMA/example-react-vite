import type { StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { expect } from 'storybook/test';
import { describe, test } from 'vitest';
import { getProfileData } from './getProfileData';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg';

describe('getProfileData', () => {
    test('should retutn data', () => {
        const data = {
            username: 'decomma',
            age: 23,
            country: Country.Russia,
            avatar: AvatarImg,
            city: 'Voronezh',
            currency: Currency.RUB,
            firstname: 'Имя',
            lastname: 'Фамилия',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileData(state as StateSchema)).toEqual(null);
    });
});
