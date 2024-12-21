import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";
import Login from "../Pages/Login";

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
        }
      ]
    },
  ]);
  export default router