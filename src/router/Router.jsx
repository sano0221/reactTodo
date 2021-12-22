import { Switch, Route, } from "react-router-dom";
import { memo } from "react";

import { Login } from "../compoonents/pages/Login";
import { Page404 } from "../compoonents/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";

export const Router = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/home" render={({ match: { url } }) => (
                <Switch>
                    {HomeRoutes.map((route) => (
                        <Route
                            key={route.path}
                            exact={route.exact}
                            path={`${url}${route.path}`}
                        >
                            {route.children}
                        </Route>                        
                    ))}
                </Switch>
            )}
            />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})