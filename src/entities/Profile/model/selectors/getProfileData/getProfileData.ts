import type { StateSchema } from "@/app/providers/Store"

export const getProfileData = (state: StateSchema) => state.profile?.data || ''; 