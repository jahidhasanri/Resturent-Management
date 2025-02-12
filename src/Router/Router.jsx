import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AddFoodPage from "../Pages/AddFoodPage";
import PrivateRoute from "./PrivateRoute";
import SingleFood from "../Pages/SingleFood";
import FoodPurchase from "../Pages/FoodPurchase";
import MyFood from "../Pages/MyFood";
import Update from "../Pages/Update";
import MyOrders from "../Pages/MyOrders";
import Error from "../Pages/Error";
import axios from "axios";
import AboutUs from "../Components/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allfoods',
            element:<AllFoods></AllFoods>,
            
        },
        {
            path:'/addfood',
            element:<PrivateRoute><AddFoodPage></AddFoodPage></PrivateRoute>
        },
        {
            path:'/aboutus',
            element:<AboutUs></AboutUs>
        },
        {
            path:'/myfood',
            element:<PrivateRoute><MyFood></MyFood></PrivateRoute>
        },
        {
            path:'/singlefood/:id',
            element:<SingleFood></SingleFood>,
            loader: ({ params }) => axios.get(`https://assignment-11-solution-server.vercel.app/jobs/${params.id}`).then(res => res.data)
        },
        {
            path:'/foodpurchase/:id',
            element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
            loader: ({ params }) => axios.get(`https://assignment-11-solution-server.vercel.app/jobs/${params.id}`).then(res => res.data)
        },
        {
            path:'/myorders',
            element:<PrivateRoute><MyOrders></MyOrders></PrivateRoute>
        },
        {
            path:'/gallery',
            element:<Gallery></Gallery>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/update/:id',
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({ params }) => axios.get(`https://assignment-11-solution-server.vercel.app/jobs/${params.id}`).then(res => res.data)
        },
      ]
    },
  ]);
  export default router