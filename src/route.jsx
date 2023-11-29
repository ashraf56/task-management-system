import { createBrowserRouter } from "react-router-dom";
import HOme from "./HOme";
import Alltask from "./Alltask/Alltask";
import Addtask from "./Addtask/Addtask";
import Updatetask from "./Updatetask/Updatetask";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <HOme></HOme>,
      children:[
        {
          path:'/',
          element:<Alltask></Alltask>
        },
        {
          path:'/add',
          element:<Addtask/>
        },
        {
          path:'/update/:id',
          element:<Updatetask/>
        },
      ]
    }
  ]);
  export default  router;