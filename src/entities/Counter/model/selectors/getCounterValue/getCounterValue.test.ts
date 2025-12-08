import { describe, expect, it } from 'vitest';
import { getCounterValue } from './getCounterValue';
import type { CounterSchema } from '../../types/counterSchema';

describe('getCounterValue', () => {
    it('should return value', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(getCounterValue(state)).toEqual(10);
    });
});
