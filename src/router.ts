import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./components/Authentication";
import { Home } from "./components/Home";

import { AuthLayout } from "./pages/AuthenticationPage";


export const router = createBrowserRouter([

  {
    path: "/",
    Component: Home,
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "/signin",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Register,
      }
    ]

  }
]);

