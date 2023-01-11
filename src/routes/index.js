import { createBrowserRouter } from "react-router-dom";
import Favorite from "../pages/favorite";
import Home from "../pages/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/favorite",
        element: <Favorite />
    }
])