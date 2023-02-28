export { userReducer, userActions } from "./model/slice/userSlice";

export type { UserSchema, User } from "./model/types/user";

export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { getUserInited } from "./model/selectors/getUserInited/getUserInited";
export {
  getUserRoles,
  isUserAdmin,
  isUserManager,
} from "./model/selectors/roleSelector";
export { UserRole } from "./model/consts/consts";
