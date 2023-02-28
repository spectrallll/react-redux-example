import { RouteProps } from "react-router-dom";
// eslint-disable-next-line path-checker-plugin/upper-layer-import-dont
import { UserRole } from "@/entities/User";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
