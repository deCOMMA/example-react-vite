import type { StateSchema } from "@/app/providers/Store";

export const getUserInited = (state: StateSchema) => state.user._inited;