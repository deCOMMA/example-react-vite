import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { describe, expect, it } from 'vitest';
import type { LoginShema } from '../types/loginShema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test.ts', () => {
    it('test set username', () => {
        const state: DeepPartial<LoginShema> = { username: '123' };
        expect(loginReducer(state as LoginShema, loginActions.setUsername('123123'))).toStrictEqual(
            { username: '123123' }
        );
    });
    it('test set password', () => {
        const state: DeepPartial<LoginShema> = { password: '123' };
        expect(loginReducer(state as LoginShema, loginActions.setPassword('123123'))).toStrictEqual(
            { password: '123123' }
        );
    });
});
