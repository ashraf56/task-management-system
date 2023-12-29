import { createBrowserRouter } from "react-router-dom";
import HOme from "./HOme";
import Alltask from "./Alltask/Alltask";
import Addtask from "./Addtask/Addtask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HOme></HOme>,
    children: [
      {
        path: '/',
        element: <Alltask></Alltask>
      },
      {
        path: '/add',
        element: <Addtask />
      },

    ]
  }
]);
export default router;