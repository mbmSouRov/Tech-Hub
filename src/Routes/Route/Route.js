import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "../../Components/Checkout/Checkout";
import CourseInfo from "../../Components/CourseInfo/CourseInfo";
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
      {
        path: "/courseInfo/:id",
        element: (
          <Privateroute>
            <CourseInfo></CourseInfo>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://vercel-webtech-deploy.vercel.app/tech-categories/courseInfo/${params.id}`
          ),
      },
      {
        path: "/checkout/id/:id",
        element: (
          <Privateroute>
            <Checkout></Checkout>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://vercel-webtech-deploy.vercel.app/tech-categories/courseInfo/${params.id}`
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
