import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import { Register } from "./components/layout/register/Register";
import { Login } from "./components/layout/login/Login";
import { TittleBar } from "./components/main/tittle_bar/TittleBar";
import { LeftSideBar } from "./components/main/leftSideBar/LeftSideBar";
import { RightSideBar } from "./components/main/rightSideBar/RightSideBar";
import { Home } from "./components/main/home/Home";
import { Profile } from "./components/layout/profile/Profile";
import { Authentication } from "./components/main/authentication/authentication";

export const App = (): JSX.Element => {
    const { nowUser }: any = useContext(Authentication);

    const Layout = (): JSX.Element => {
        return (
            <div>
                <TittleBar />
                <div style={{ display: "flex" }}>
                    <LeftSideBar />
                    <div style={{ flex: 6 }}>
                        <Outlet />
                    </div>
                    <RightSideBar />
                </div>
            </div>
        );
    };

    type SecureRouteProps = {
        children:
            | boolean
            | JSX.Element
            | Element
            | React.ReactFragment
            | null
            | undefined;
    };

    const SecureRoute = ({ children }: SecureRouteProps): JSX.Element => {
        if (nowUser) {   //TODO ! to dont show page
            return <Navigate to={"/login"} />;
        }
        return children as JSX.Element;
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <SecureRoute>
                    <Layout />
                </SecureRoute>
            ),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile/:id",
                    element: <Profile />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/registration",
            element: <Register />,
        },
    ]);

    return (
        <>
            <div>
                <RouterProvider router={router} />
            </div>
        </>
    );
};
