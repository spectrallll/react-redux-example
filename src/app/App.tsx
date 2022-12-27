import React, { Suspense, useEffect } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";

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
