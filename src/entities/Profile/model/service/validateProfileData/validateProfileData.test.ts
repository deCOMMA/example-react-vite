import { describe, expect, it, vi } from 'vitest';
import { validateProfileData } from './validateProfileData';
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg'
import { validateProfileError } from '../../types/profile';

const formData = {
    username: 'decomma',
    age: 23,
    country: Country.Russia,
    avatar: AvatarImg,
    city: 'Voronezh',
    currency: Currency.RUB,
    firstname: 'Имя',
    lastname: 'Фамилия',
}

vi.mock('@/shared/config/i18n/i18n', () => ({
    default: {
        t: vi.fn((str: string) => str)
    }
}));

describe('fetchProfileData', () => {
    it('fulfilled fetch', async () => {
        const result = validateProfileData(formData);
        expect(result).toEqual([]);
    });
    it('without firstname and lastname', async () => {
        const result = validateProfileData({ ...formData, lastname: '', firstname: '' });
        expect(result).toEqual([validateProfileError.INCORECT_USER_DATA]);
    });
    it('incorrect age', async () => {
        const result = validateProfileData({ ...formData, age: undefined });
        expect(result).toEqual([validateProfileError.INCORECT_AGE]);
    });
    it('without country', async () => {
        const result = validateProfileData({ ...formData, country: undefined });
        expect(result).toEqual([validateProfileError.INCORECT_COUNTRY]);
    });
    it('without all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            validateProfileError.INCORECT_USER_DATA,
            validateProfileError.INCORECT_AGE,
            validateProfileError.INCORECT_COUNTRY,
        ]);
    });
});