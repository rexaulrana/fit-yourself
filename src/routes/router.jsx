import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/main/MainLayout";
import AboutUs from "../pages/About us/AboutUs";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/Contact us/ContactUs";
import Home from "../pages/Home/Home";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default router;
