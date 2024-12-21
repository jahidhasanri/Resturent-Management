import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllFoods from "../Pages/AllFoods";
import Gallery from "../Pages/Gallery";

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
        }
      ]
    },
  ]);
  export default router