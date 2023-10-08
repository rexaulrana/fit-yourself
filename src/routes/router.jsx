import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import AboutUs from "../pages/About us/AboutUs";
// import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/Contact us/ContactUs";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Cart from "../pages/Cart/Cart";

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
        path: "/about",
        element: <AboutUs></AboutUs>,
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
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch("/services.json"),
      },
    ],
  },
]);

export default router;
