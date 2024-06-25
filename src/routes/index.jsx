import { useRoutes } from "react-router-dom";
import HomeLayout from "../layout/home-layout/HomeLayout";
import {HomePage} from "./element"
 

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      Children: [
        {element: <HomePage/>, index: true },
        
      ],
    },
  ]);
};

export default Router;
