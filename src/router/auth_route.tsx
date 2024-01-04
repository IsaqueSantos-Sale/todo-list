import { RouteObject } from "react-router-dom";
import AuthLoginPage from "../Pages/AuthLoginPage";

export const auth_route: RouteObject = {
  path: "/login",
  element: <AuthLoginPage />,
};
