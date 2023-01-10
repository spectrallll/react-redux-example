import { StateSchema } from "app/providers/StoreProvider";

export const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text || "";
