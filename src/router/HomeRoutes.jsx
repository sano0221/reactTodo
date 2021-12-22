import { Home } from "../compoonents/pages/Home";
import { UserManagement } from "../compoonents/pages/UserManagement";
import { Setting } from "../compoonents/pages/Setting";
import { Page404 } from "../compoonents/pages/Page404";

export const HomeRoutes = [
    {
        path: "/",
        exact: true,
        children: <Home />
    },
    {
        path: "/usermanagement",
        exact: false,
        children: <UserManagement />
    },
    {
        path: "/setting",
        exact: false,
        children: <Setting />
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />
    }
]