import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import { RouterProvider } from "react-router-dom";

const Body =()=>{

    const appRoutes = createBrowserRouter([
        {
            path:'/',
            element: <Login />
        },
        {
            path:'/browse',
            element:<Browse />
        },
        {
            path:"/error",
            element:<Error />
        }
    ]);
   
    return (
        <div>
           <RouterProvider router={appRoutes}></RouterProvider>
        </div>
    )
}
export default Body;