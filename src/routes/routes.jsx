import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Pages/Home/Home/Home";
import Login from "../component/Pages/Authentication/Login/Login";
import Register from "../component/Pages/Authentication/Register/Register";
import Blog from "../component/Pages/Blog/Blog";

import AllToys from "../component/Pages/Category/AllToys/AllToys";
import DetailsPage from "../component/Pages/Category/DetialsPage/DetailsPage";
import AddToy from "../component/Pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "details-page/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => {
          // console.log(params);
          return fetch(`http://localhost:4000/allToys/${params.id}`);
        },
      },
      {
        path: "/add-toy",
        element: <AddToy></AddToy>,
      },
    ],
  },
]);
export default router;
