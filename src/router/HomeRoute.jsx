export const HomeRoute = [
    {
        path: "/home",
        exact: true,
    },
    {
        path: "/home/usermanagement",
        exact: false,
        children: <UserManagement />
    },
    {
        path: "/home/setting",
        exact: false,
        children: <Setting />
    }
]