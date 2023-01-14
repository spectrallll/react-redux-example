import React, {
  memo, Suspense, useCallback,
} from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "widgets/PageLoader";
import { AppRouteProps, routeConfig } from "shared/config/routeConfig/routeConfig";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);
  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
