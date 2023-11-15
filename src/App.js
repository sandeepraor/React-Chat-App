import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import SendMailPage from "./Pages/SendMailPage";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/email",
      element: <SendMailPage />,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <h1>hello</h1>
    </RouterProvider>
  );
};

export default App;
