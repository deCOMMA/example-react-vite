import type { StateSchema } from '@/app/providers/Store';

export const getProfileLoader = (state: StateSchema) => state.profile?.isLoading || null;
