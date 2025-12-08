import { describe, expect, it } from 'vitest';
import { getCounterValue } from './getCounterValue';
import type { StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';

describe('getCounterValue', () => {
    it('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
