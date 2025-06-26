import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/root/Root";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffe from "../pages/UpdateCoffe";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffe></UpdateCoffe>
            }
            
        ]
    }
])

export default Route;