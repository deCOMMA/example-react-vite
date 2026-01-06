import type { StateSchema } from "@/app/providers/Store";

export const getProfileForm = (state: StateSchema) => state.profile?.form;