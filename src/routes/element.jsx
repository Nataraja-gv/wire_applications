/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";
import { Stack, CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <Stack
          alignItems="center"
          justifyContent="center"
          width="100%"
          sx={{ margin: "250px auto" }}
        >
          <CircularProgress />
        </Stack>
      }
    >
      <Component {...props} />
    </Suspense>
  );

export const HomePage = Loadable(lazy(() => import("../pages/homepage/HomePage")));

export const MenuHomePage =Loadable(lazy(()=>import ("../pages/menu-home-page/MenuHomePage"))) ;