import { describe, expect, it } from 'vitest';
import { getCounter } from './getCounter';
import type { StateSchema } from '@/app/providers/Store';
import type { DeepPartial } from '@/shared/helpers/types/deepPartial';

describe('getCounter', () => {
    it('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
