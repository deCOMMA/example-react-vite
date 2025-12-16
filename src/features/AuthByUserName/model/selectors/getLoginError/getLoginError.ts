import type { StateSchema } from '@/app/providers/Store';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || '';
