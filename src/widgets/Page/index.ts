export { Page } from "./ui/Page";
export type { ScrollSaveSchema } from "./model/types/scrollSave";
export {
  scrollSaveReducer,
  scrollSaveActions,
} from "./model/slices/scrollSaveSlice";
export {
  getSaveScroll,
  getSaveScrollByPath,
} from "./model/selectors/saveScrollSelectors";
