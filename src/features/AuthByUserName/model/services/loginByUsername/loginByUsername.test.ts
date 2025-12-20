import { beforeEach, describe, expect, it, vi } from 'vitest';
import { loginByUsername } from './loginByUsername';
import axios from 'axios';
import type { Dispatch } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/Store';
import { userActions } from '@/entities/User';

vi.mock('axios');
const mockedAxios = vi.mocked(axios, true);

describe('loginByUsername', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
    });

    it('fulfilled fetch', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });
    it('rejected fetch', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUsername({ username: '123', password: '123' });
        const result = await action(dispatch, getState, undefined);
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Вы ввели неверный логин или пароль');
    });
});
