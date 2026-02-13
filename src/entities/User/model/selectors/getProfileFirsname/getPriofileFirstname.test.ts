import type { StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { expect } from 'storybook/test';
import { describe, test } from 'vitest';
import { getProfileFirsname } from './getProfileFirsname';

describe('getProfileFirsname', () => {
    test('should retutn митя', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    firstname: 'митя',
                },
            },
        };
        expect(getProfileFirsname(state as StateSchema)).toEqual('митя');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileFirsname(state as StateSchema)).toEqual('');
    });
});
