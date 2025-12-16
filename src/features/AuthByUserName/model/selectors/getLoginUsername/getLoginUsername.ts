import type { StateSchema } from '@/app/providers/Store';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
