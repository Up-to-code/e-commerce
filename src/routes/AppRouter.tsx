import Main_layot from "@layouts/Main_layot/Main_layot";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import CateGraye from "@pages/CateGraye";
import Productes from "@pages/Productes";
import AboutUs from "@pages/AboutUs";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Error from "@pages/Error";

const router = createBrowserRouter([{
  path: "/",
  element: <Main_layot />,
  errorElement: <Error />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "Login",
      element: <Login />,
    },
    {
      path: "SignUp",
      element: <SignUp />,
    },
    {
      path: "CateGrayes",
      element: <CateGraye />,
    },
    {
      path: "Productes/:prefix",
      element: <Productes />,
      loader: ({ params }) => {
        if (
          typeof params.prefix !== "string" ||
          !/^[a-z]+$/i.test(params.prefix)
        ) {
          throw new Response("Bad Request", {
            statusText: "Category not found",
            status: 400,
          });
        }
        return true
      }
    },
    {
      path: "AboutUs",
      element: <AboutUs />,
    },
  ]
}])

function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}
export default AppRouter