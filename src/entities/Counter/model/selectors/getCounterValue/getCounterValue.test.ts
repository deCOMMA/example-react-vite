import { describe, expect, it } from 'vitest';
import type { StateSchema } from '@/app/providers/Store';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    it('should return value', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
