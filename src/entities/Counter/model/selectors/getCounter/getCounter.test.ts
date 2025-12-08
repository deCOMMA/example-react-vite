import { describe, expect, it } from 'vitest';
import { getCounter } from './getCounter';
import type { CounterSchema } from '../../types/counterSchema';

describe('getCounter', () => {
    it('should return counter value', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
