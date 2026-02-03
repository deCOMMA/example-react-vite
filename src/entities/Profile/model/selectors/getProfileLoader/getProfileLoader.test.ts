import type { StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';
import { expect } from 'storybook/test';
import { describe, test } from 'vitest';
import { getProfileLoader } from './getProfileLoader';

describe('getProfileLoader', () => {
    test('should retutn isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileLoader(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = { profile: {} };
        expect(getProfileLoader(state as StateSchema)).toEqual(null);
    });
});
