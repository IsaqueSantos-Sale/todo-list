import { createBrowserRouter } from "react-router-dom";
import { auth_route } from "./auth_route";
import { home_route } from "./home_route";

const router = createBrowserRouter([auth_route, home_route]);

export default router;
