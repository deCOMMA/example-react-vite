import type { StateSchema } from "@/app/providers/Store";

export const getProfileFirsname = (state: StateSchema) => state.profile?.data?.firstname || '';