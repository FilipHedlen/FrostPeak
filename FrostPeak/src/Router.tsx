import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"; 
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import LocationsPage from "./pages/Locations/LocationsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SlopePage  from "./pages/Slopes/SlopePage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/locations",
        element: <LocationsPage />,
      },
      {
        path: "/slopes",
        element: <SlopePage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);