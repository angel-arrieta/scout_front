import { createBrowserRouter } from "react-router-dom";
import LoginRegister from "../page/loginregister.jsx";
import Logged from "../page/logged.jsx";
import ProtectedRoute from "./protectedroute.jsx";

export const Router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginRegister />,
    },
    {
        path: "/panel",
        element: (
            <ProtectedRoute>
                <Logged />
            </ProtectedRoute>
        ),
    }
]);