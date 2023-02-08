import { StateSchema } from "@/app/providers/StoreProvider";

export const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error || undefined;
