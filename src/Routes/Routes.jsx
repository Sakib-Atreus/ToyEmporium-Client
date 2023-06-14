import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/Home/Home/AddToy/AddToy";
// import EdiToy from "../Pages/Home/Home/EditToy/EditToy";
import AllToys from "../Pages/Home/Home/AllToys/AllToys";
import Details from "../Pages/Home/Home/Details/Details";
import Error from "../Pages/Shared/Error/Error";

import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Home/Home/Blogs/Blogs";
import MyToys from "../Pages/Home/Home/MyToys/MyToys";
import EditToy from "../Pages/Home/Home/EditToy/EditToy";
import Offer from "../Pages/Home/Home/Section/Offer/Offer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5007/allToys/${params.id}`)
            },
            {
                path: '/addToy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/editToy/:id',
                element: <EditToy></EditToy>,
                loader:({params})=>fetch(`http://localhost:5007/editToys/${params.id}`)
            },
            // },
            {
                path: '/myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5007/myToys/${params.email}`)
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/offer',
                element:<Offer></Offer>
            }
        ],
    },
    {
        path: '*',
        element: <Error></Error>
    }

]);
export default router;