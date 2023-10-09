import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
// import AboutUs from "../pages/About us/AboutUs";
// import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/Contact us/ContactUs";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Cart from "../pages/Cart/Cart";
import Profile from "../pages/Profile/Profile";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
