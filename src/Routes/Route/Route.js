import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import Main from "../../Layout/Main";
import Privateroute from "./PrivateRoute/Privateroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/courses",
        element: (
          <Privateroute>
            <Courses></Courses>
          </Privateroute>
        ),
      },
    ],
  },
]);
const Route = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Route;
