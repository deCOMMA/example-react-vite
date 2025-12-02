import { describe, expect, it } from 'vitest';
import { getCounter } from './getCounter';
import type { StateSchema } from '@/app/providers/Store';

describe('getCounter', () => {
    it('should return counter value', () => {
        const state: StateSchema = {
            counter: { value: 10 },
        };
        expect(getCounter(state)).toEqual({ value: 10 });
    });
});
