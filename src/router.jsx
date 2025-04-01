import { createBrowserRouter } from "react-router-dom";
import LoginRegister from "./pages/loginregister.jsx";
import Logged from "./pages/logged.jsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LoginRegister />,
    },
    {
        path: "/logged",
        element: <Logged />,
    }
]);