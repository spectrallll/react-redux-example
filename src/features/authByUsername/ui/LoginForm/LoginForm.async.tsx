import { FC, lazy } from "react";
import { LoginFormProps } from "@/features/authByUsername/ui/LoginForm/LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import("./LoginForm"));
