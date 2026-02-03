import type { StateSchema } from '@/app/providers/Store';

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly;
