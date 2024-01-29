import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout"; 
import HomePage from "./pages/Home/HomePage";
import { ContactPage } from "./pages/Contact/ContactPage";
import LocationsPage from "./pages/Locations/LocationsPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SlopePage  from "./pages/Slopes/SlopePage";
import InformationPage from "./pages/Information/InformationPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        index: true,
      },
      {
        path: "/locations",
        element: <LocationsPage></LocationsPage>,
      },
      {
        path: "/slopes",
        element: <SlopePage></SlopePage>,
      },
      {
        path: "/info",
        element: <InformationPage></InformationPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);