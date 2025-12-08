import type { StateSchema } from '@/app/providers/Store';

export const getCounter = (state: StateSchema) => state.counter;
