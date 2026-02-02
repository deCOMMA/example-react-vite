import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchProfileData } from './fetchProfileData';
import type { AxiosInstance } from 'axios';
import type { Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/Store';
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import AvatarImg from '@/shared/ui/Avatar/storybook.jpg'

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

vi.mock('@/shared/config/i18n/i18n', () => ({
    default: {
        t: vi.fn((str: string) => str)
    }
}));

describe('fetchProfileData', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    let api: Partial<AxiosInstance>;
    let navigate: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
        api = {
            post: vi.fn(),
            get: vi.fn(),
        };
        navigate = vi.fn();
    });

    it('fulfilled fetch', async () => {

        (api.get as ReturnType<typeof vi.fn>).mockResolvedValue({ data: data });
        const action = fetchProfileData('1');
        const result = await action(
            dispatch,
            getState,
            { api: api as AxiosInstance, navigate }
        );
        expect(api.get).toHaveBeenCalledWith('/profile');
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    it('rejected fetch', async () => {
        (api.post as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Request failed'));
        const action = fetchProfileData('1');
        const result = await action(
            dispatch,
            getState,
            { api: api as AxiosInstance, navigate }
        );
        expect(api.get).toHaveBeenCalledWith('/profile');

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Ошибка загрущки профиля');
    });

});