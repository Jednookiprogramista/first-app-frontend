import {
    createBrowserRouter,
    RouterProvider,
    Outlet, Navigate,
} from "react-router-dom";

import React from "react";
import {Register} from "./components/layout/register/Register";
import {Login} from "./components/layout/login/Login";
import {TittleBar} from "./components/main/tittle_bar/TittleBar";
import {LeftSideBar} from "./components/main/leftSideBar/LeftSideBar";
import {RightSideBar} from "./components/main/rightSideBar/RightSideBar";
import {Home} from "./components/layout/home/Home"
import {Profile} from "./components/layout/profile/Profile"




export const  App = () =>  {

    const nowUser = true;    // true to see the home page to in.Feature made in order to don't show home after


    const Layout = () => {
        return(
            <div>
                <TittleBar/>
                <div style={{display: "flex"}}>
                    <LeftSideBar/>
                    <Outlet/>
                    <RightSideBar/>
                </div>
            </div>
        )
    }

    type Props = {
        children: any
        //  had problems to define the type of children due to SecureRoute
        //  boolean | JSX.Element | Element | ReactFragment | null | undefined

    }
    const SecureRoute = ({children}: Props) => {
        if(!nowUser) {
            return <Navigate to={'/login'}/>
        }
        return children
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (<SecureRoute> <Layout/> </SecureRoute>),
            children: [
                {
                    path:'/',
                    element: <Home/>
                },
                {
                    path:'/profile/:id',
                    element: <Profile/>
                }
            ]
        },


        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registration',
            element: <Register/>
        },


    ]);


    return (
    <>

        <div>

        <RouterProvider router={router}/>

        </div>

    </>
  );
};
