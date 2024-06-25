import { Suspense, lazy } from "react";
import { Stack, CircularProgress } from "@mui/material";


export const HomePage = lazy(() => import("../pages/home/HomePage"));


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
    <HomePage />
</Suspense>



