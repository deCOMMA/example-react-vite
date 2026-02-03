import type { StateSchema } from '@/app/providers/Store';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentFormShema?.text;
export const getAddCommentFormError = (state: StateSchema) => state.addCommentFormShema?.error;
