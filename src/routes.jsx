import Layout from "@components/index";
import ErrorPage from "@pages/ErrorPage";
import Home from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Mongolia from "@/pages/Mongolia";
import Vancouver from "@/pages/Vancouver";
import Vietnam from "@/pages/Vietnam";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/mongolia",
        element: <Mongolia />,
      },
      {
        path: "/vancouver",
        element: <Vancouver />,
      },
      {
        path: "/vietnam",
        element: <Vietnam />,
      },
    ],
  },
]);

export default router;
