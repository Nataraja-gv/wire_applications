import { useRoutes } from "react-router-dom";
import HomeLayout from "../layout/home-layout/HomeLayout";
import EventsPage from "../layout/eventspage/EventsPage"
import { HomePage} from "./element";
import Gallery from "../layout/gallery/Gallery";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      Children: [{ element: <HomePage />, index: true }],
    },

    {
      path: "/events",
      element: <EventsPage />,
    },

    {
      path: "/gallery",
      element: <Gallery/>,
    },
  ]);
};

export default Router;
