import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Pages/Home/Home/Home";
import Login from "../component/Pages/Authentication/Login/Login";
import Register from "../component/Pages/Authentication/Register/Register";
import Blog from "../component/Pages/Blog/Blog";
import RemoteControl from "../component/Pages/RemoteControl/RemoteControl";
import EducationalCars from "../component/Pages/EducationalCars/EducationalCars";
import ModelCars from "../component/Pages/ModelCars/ModelCars";

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
        path: "/remote-control",
        element: <RemoteControl></RemoteControl>,
      },
      {
        path: "/educational-car",
        element: <EducationalCars></EducationalCars>,
      },
      {
        path: "/model-car",
        element: <ModelCars></ModelCars>,
      },
    ],
  },
]);
export default router;
