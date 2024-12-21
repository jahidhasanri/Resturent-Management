import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AllFoods from "../Pages/AllFoods";

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/allfoods',
            element:<AllFoods></AllFoods>
        }
      ]
    },
  ]);
  export default router