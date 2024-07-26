import { useRoutes } from "react-router-dom";
import HomeLayout from "../layout/home-layout/HomeLayout";
import EventsPageLayout from "../layout/events-page/EventsPageLayout";
import { HomePage, MenuHomePage } from "./element";
import GalleryLayout from "../layout/gallery-page/GalleryLayout";
import { MenuLayout } from "../layout/menu-page/MenuLayout";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      Children: [{ element: <HomePage />, index: true }],
    },

    {
      path: "/events",
      element: <EventsPageLayout />,
    },

    {
      path: "/gallery",
      element: <GalleryLayout />,
    },
    {
      path: "/menu-details",
      element: <MenuLayout />,
      Children: [
        {
          element: <MenuHomePage />,
          index: true,
        },
      ],
    },
  ]);
};

export default Router;
