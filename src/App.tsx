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
            path: '/registration',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
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
