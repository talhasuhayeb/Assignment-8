import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Laptops from "../Components/Laptops";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../Category.json"),
        children: [
          {
            path: "/",
            element: <Laptops />,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/category/:category",
            element: <Laptops />,
            loader: () => fetch("../data.json"),
          },
        ],
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default routes;
