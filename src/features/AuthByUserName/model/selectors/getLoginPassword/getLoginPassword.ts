import type { StateSchema } from '@/app/providers/Store';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
