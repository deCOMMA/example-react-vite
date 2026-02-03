import { beforeEach, describe, expect, it, vi } from 'vitest';
import { updateProfileData } from './updateProfileData';
import type { AxiosInstance } from 'axios';
import type { Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/Store';
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
    id: "1",
}

vi.mock('@/shared/config/i18n/i18n', () => ({
    default: {
        t: vi.fn((str: string) => str)
    }
}));

describe('updateProfileData', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    let api: Partial<AxiosInstance>;
    let navigate: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn(() => ({
            profile: {
                form: formData
            }
        } as StateSchema));
        api = {
            post: vi.fn(),
            get: vi.fn(),
            put: vi.fn(),
        };
        navigate = vi.fn();
    });

    it('should update profile data successfully', async () => {
        (api.put as ReturnType<typeof vi.fn>).mockResolvedValue({ data: formData });

        const action = updateProfileData();
        const result = await action(
            dispatch,
            getState,
            { api: api as AxiosInstance, navigate }
        );

        expect(api.put).toHaveBeenCalledWith('/profile', formData);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(formData);
    });

    it('should reject with validation errors when form data is invalid', async () => {
        const invalidFormData = {
            ...formData,
            firstname: '',
        };

        const getStateWithInvalidData = vi.fn(() => ({
            profile: {
                form: invalidFormData
            }
        } as StateSchema));

        const action = updateProfileData();
        const result = await action(
            dispatch,
            getStateWithInvalidData,
            { api: api as AxiosInstance, navigate }
        );

        expect(api.put).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(Array.isArray(result.payload)).toBe(true);
        expect((result.payload as validateProfileError[]).length).toBeGreaterThan(0);
    });

    it('should reject with server error when API request fails', async () => {
        (api.put as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Request failed'));

        const action = updateProfileData();
        const result = await action(
            dispatch,
            getState,
            { api: api as AxiosInstance, navigate }
        );

        expect(api.put).toHaveBeenCalledWith('/profile', formData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([validateProfileError.SERVER_ERROR]);
    });

    it('should reject when API returns no data', async () => {
        (api.put as ReturnType<typeof vi.fn>).mockResolvedValue({ data: null });

        const action = updateProfileData();
        const result = await action(
            dispatch,
            getState,
            { api: api as AxiosInstance, navigate }
        );

        expect(api.put).toHaveBeenCalledWith('/profile', formData);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([validateProfileError.SERVER_ERROR]);
    });
});