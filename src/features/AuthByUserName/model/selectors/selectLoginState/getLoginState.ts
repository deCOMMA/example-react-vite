import type { StateSchema } from '@/app/providers/Store';

export const getLoginState = (state: StateSchema) => state?.loginForm;
