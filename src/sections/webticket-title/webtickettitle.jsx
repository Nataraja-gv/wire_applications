import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import ButtonBtn from '../../components/button/Button';

const Webtickettitle = () => {
    const theme = useTheme();

    return (
        <Box
            mt={{ xs: 6, sm: 8, md: 10 }}
            mb={{ xs: 20, sm: 30, md: 0 }}
        >
            <Stack
                mx="auto"
                alignItems={{ xs: 'center', sm: 'center' }}
                spacing={3}
            >
                <Typography variant="h1" sx={{
                    ...theme.typography.h1,
                    fontSize: {
                        xs: '32px',
                        sm: '36px',
                        md: '48px',
                        lg: '64px',
                    },
                }}>
                    Experience Unforgettable Moments with Us
                </Typography>
            </Stack>
            <Stack
                mx="auto"
                alignItems={{ xs: 'center', sm: 'center' }}
                spacing={0}
                mt={2}
                
                mb={{
                    xs:"240px",
                    sm:"250px",
                    md:"280px" ,
                    lg:"240px",
                }}
            >
                <ButtonBtn btnName="Explore Events" />
            </Stack>
        </Box >
    );
};

export default Webtickettitle;
