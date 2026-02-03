import type { StateSchema } from '@/app/providers/Store';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
