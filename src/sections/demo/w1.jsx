import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import ButtonBtn from "../../components/button/Button";
import { useTheme } from '@mui/material/styles';

const Webtickettitle = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box mt={15} mb={30}>
            <Stack
                mx="auto"
                alignItems={isSmallScreen ? "start" : "center"}
                spacing={3}
                textAlign="center"
            >
                <Typography variant="h1" sx={theme.typography.h1}>
                    Experience Unforgettable Moments with Us
                </Typography>
            </Stack>
            <Stack
                mx="auto"
                alignItems={isSmallScreen ? "start" : "center"}
                spacing={2}
                mt={2}
            >
                <ButtonBtn btnName={"Explore Events"} />
            </Stack>
        </Box>
    );
}

export default Webtickettitle;
