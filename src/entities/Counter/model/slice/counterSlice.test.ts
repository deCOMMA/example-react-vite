import { describe, expect, it } from 'vitest';
import { counterActions, counterReducer } from './counterSlice';
import type { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
    it('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
    });
    it('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
    });
    it('undefined state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
