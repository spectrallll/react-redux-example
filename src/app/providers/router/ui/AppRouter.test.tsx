import { screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import AppRouter from "./AppRouter";
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticles,
  getRouteProfile,
} from "@/shared/const/router";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", () => {
  test("Page will be render", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId("AboutPage");
    expect(page).toBeInTheDocument();
  });

  test("Page not found", async () => {
    componentRender(<AppRouter />, {
      route: "/random",
    });

    const page = await screen.findByTestId("NotFoundPage");
    expect(page).toBeInTheDocument();
  });

  test("Редирект неавторизованного пользователя на главную страницу", async () => {
    componentRender(<AppRouter />, {
      route: getRouteArticles(),
    });
    const page = await screen.findByTestId("MainPage");
    expect(page).toBeInTheDocument();
  });

  test("Авторизованный пользователь может заходить на закрытые страницы", async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile("1"),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });
    const page = await screen.findByTestId("ProfilePage");
    expect(page).toBeInTheDocument();
  });

  test("Доступ запрещён", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });
    const page = await screen.findByTestId("ForbiddenPage");
    expect(page).toBeInTheDocument();
  });

  test("Доступ с нужными ролями разрешён", async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });
    const page = await screen.findByTestId("AdminPanelPage");
    expect(page).toBeInTheDocument();
  });
});
