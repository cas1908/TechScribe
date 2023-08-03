import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./components/Authentication";
import { Home } from "./components/Home";


import { AuthLayout } from "./pages/AuthenticationPage";
import { FeedPersonalizedData } from "./components/FeedPersonalizedData";
import { HomeComponent } from "./components/HomeComponent";
import { MarkdownLayout } from "./pages/MarkdownLayout";
import HomeLayout from "./pages/HomeLayout";


export const router = createBrowserRouter([

  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/signin",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Register,
      }]
  },
  {
    path: "/feed-interest",
    Component: FeedPersonalizedData
  },
  {
    path: "/",
    Component: MarkdownLayout,
    children: [
      {
        path: "/edit-new-post",
        Component: Login,
      },
      {
        path: "/preview-new-post",
        Component: Register,
      }]
  }

]);

