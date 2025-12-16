import type { StateSchema } from '@/app/providers/Store';

export const getLoginLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
