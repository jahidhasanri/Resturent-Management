import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/allfoods',
            element:<AllFoods></AllFoods>,
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