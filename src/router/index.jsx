import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Product";

export const router = createBrowserRouter([
    {path: "/", element: <App/>, children: [
        {index: true, element: <Home/>},
        {path: 'products', element: <Products/>}
    ]},
    {path: "*", element: <h1>404 not found</h1>}
]);