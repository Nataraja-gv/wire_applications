/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import  outlet1 from "../../assets/outlets/outlet1.png";
import  outlet2 from "../../assets/outlets/outlet2.png";
import  outlet3 from "../../assets/outlets/outlet3.png";

import OutletCard from '../../components/outlet-card/outletcard';


const outletInfo = [{
    id: 1,
    outlet_name: "Bannerghatta",
    image: outlet1,
    address: "Showroom, 4th, 25, Shanthala Nagar, Floor, Bengaluru, Brigade Road, Bangalore - 560001 (Above Levi's)",
    description: "We specialize in exclusive dishes unique to our outlet. Enjoy fresh, locally sourced ingredients and a cozy atmosphere. Whether for a casual meal or a special occasion, [Restaurant Name] offers a memorable dining experience."

},
{
    id: 2,
    outlet_name: "Marathahalli",
    image: outlet2,
    address: "Showroom, 4th, 25, Shanthala Nagar, Floor, Bengaluru, Brigade Road, Bangalore - 560001 (Above Levi's)",
    description: "We specialize in exclusive dishes unique to our outlet. Enjoy fresh, locally sourced ingredients and a cozy atmosphere. Whether for a casual meal or a special occasion, [Restaurant Name] offers a memorable dining experience."

},

{
    id: 3,
    outlet_name: "Electronic City",
    image: outlet3,
    address: "Showroom, 4th, 25, Shanthala Nagar, Floor, Bengaluru, Brigade Road, Bangalore - 560001 (Above Levi's)",
    description: "We specialize in exclusive dishes unique to our outlet. Enjoy fresh, locally sourced ingredients and a cozy atmosphere. Whether for a casual meal or a special occasion, [Restaurant Name] offers a memorable dining experience."

},

 
]


export default function OutLets() {
    return (
        <Box width="90%"
            sx={{
                margin: {
                    xs: "50px auto 0px",
                    sm: "10px auto 0px",
                    md: "50px auto 0px",
                    lg: "50px auto 20px",
                },
            }}><div
                style={{
                    display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                }}
            >
                <Typography variant="title" >
                    Our Outlets
                </Typography>
            </div>


            <Grid
                container
                width="100%"
                margin="auto"
                spacing={2}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    // paddingBottom: "20px",
                    marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                    },
                    WebkitOverflowScrolling: "touch",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                {outletInfo.map((item, index) => (
                    <Grid
                        item
                        key={index}
                        sx={{
                            minWidth: {
                                xs: "47.6%",
                                sm: "48.6%",
                                md: "32.3%",
                                lg: "32.6%",
                            },
                            border: "2px solid #eeeeee",
                            padding: {
                                xs: "15px",
                                sm: "20px",
                                md: "20px",
                                lg: "20px",
                            },
                            borderRadius: "10px",
                            marginRight: "10px",
                            backgroundColor: "white",
                        }}
                    >
                        <OutletCard image={item.image} outlet_name={item.outlet_name} address={item.address} description={item.description} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
