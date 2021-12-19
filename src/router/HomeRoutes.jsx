import { Home } from "../compoonents/pages/Home";
import { UserManagement } from "../compoonents/pages/UserManagement";
import { Setting } from "../compoonents/pages/Setting";

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
    }
]