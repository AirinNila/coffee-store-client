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
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffe></UpdateCoffe>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
            
        ]
    }
])

export default Route;