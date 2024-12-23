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

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allfoods',
            element:<AllFoods></AllFoods>,
            loader:()=> fetch('http://localhost:5000/jobs')
        },
        {
            path:'/addfood',
            element:<PrivateRoute><AddFoodPage></AddFoodPage></PrivateRoute>
        },
        {
            path:'/singlefood/:id',
            element:<SingleFood></SingleFood>,
            loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/foodpurchase/:id',
            element:<PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
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
        }
      ]
    },
  ]);
  export default router