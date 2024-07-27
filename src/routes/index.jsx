import { useRoutes } from "react-router-dom";
import HomeLayout from "../layout/home-layout/HomeLayout";
import EventsPageLayout from "../layout/events-page/EventsPageLayout";
import { HomePage, MenuHomePage, MenuSalad } from "./element";
import GalleryLayout from "../layout/gallery-page/GalleryLayout";
import { MenuLayout } from "../layout/menu-Layout/MenuLayout";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [{ element: <HomePage />, index: true }],
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
      children: [
        {
          element: <MenuHomePage />,
          index: true,
        },
      ],
    },
  ]);
};

export default Router;
