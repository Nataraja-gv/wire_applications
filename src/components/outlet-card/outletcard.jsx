/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function OutletCard({ image, outlet_name, address, description }) {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                boxShadow: "none",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
            }}
        >
            <img src={image} alt="" className="eventimages" />{" "}

            <Box
                sx={{
                    display: "flex",
                    marginTop: {
                        xs: "10px",
                        md: "10px",
                        sm: "10px",
                        lg: "10px",
                    },

                }}
            >

                <Typography variant="eventh1" sx={{ fontSize: "25px", lineHeight: "20px", }}>
                    {outlet_name}  

                </Typography>


            </Box>
            <Stack marginTop="15px">
                <Typography variant="subdescription">{description}</Typography>
            </Stack>
        </Box>
    )
}
