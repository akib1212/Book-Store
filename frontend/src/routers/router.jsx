import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/orders",
        element: <h1>Orders</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      
      }
      
    ],
  },
]);
export default router;