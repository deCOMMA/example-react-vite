import { beforeEach, describe, expect, it, vi } from 'vitest';
import { loginByUsername } from './loginByUsername';
import type { AxiosInstance } from 'axios';
import type { Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/Store';
import { userActions } from '@/entities/User';

vi.mock('@/shared/config/i18n/i18n', () => ({
    default: {
        t: vi.fn((str: string) => str),
    },
}));

describe('loginByUsername', () => {
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
        const userValue = { username: '123', id: '1' };
        (api.post as ReturnType<typeof vi.fn>).mockResolvedValue({ data: userValue });
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, { api: api as AxiosInstance, navigate });
        expect(api.post).toHaveBeenCalledWith('/login', {
            username: '123',
            password: '123',
        });
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    it('rejected fetch', async () => {
        (api.post as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Request failed'));
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, { api: api as AxiosInstance, navigate });
        expect(api.post).toHaveBeenCalledWith('/login', {
            username: '123',
            password: '123',
        });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('Вы ввели неверный логин или пароль');
    });
});
