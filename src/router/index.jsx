import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
    {path: "/", element: <App/>, children: []},
    {path: "*", element: <h1>404 not found</h1>}
]);