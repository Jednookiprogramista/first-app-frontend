import React from "react";
import {Register} from "./components/layout/register/Register";
import {Login} from "./components/layout/login/Login";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";



export const  App = () =>  {
    const router = createBrowserRouter([
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
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
