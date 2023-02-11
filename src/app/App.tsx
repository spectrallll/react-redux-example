import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { getUserInited, userActions } from "@/entities/User";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const init = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar className="sidebar" />
          {init && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
