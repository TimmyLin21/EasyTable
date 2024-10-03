import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/ErrorPage";
import { Layout } from "../pages/Layout";
import { Search } from "../pages/Search";
import Restaurant from "../pages/Restaurant";
import { RESTAURANTS } from "../db/restaurants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout outlet={<ErrorPage />} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
        loader: ({ params }) => {
          const restaurant = RESTAURANTS.find(
            (r) => r.id === Number(params.id)
          );
          return { restaurant };
        },
      },
    ],
  },
]);
