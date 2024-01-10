import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

import { Dashboard } from "./pages/app/dashboard/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { Orders } from "./pages/app/orders/orders";
import NotFound from "./pages/app/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <Orders /> }
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/signin", element: <SignIn /> }]
  }
]);
