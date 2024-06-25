import { Box } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';

const ButtonBtn = ({ btnName }) => {
    return (
        <Box>
            <Button variant="contained"
                sx={{
                    fontSize: {
                        xs: '16px',
                        sm: '20px',
                        md: '20px',
                        lg: '20px',
                    },
                    fontWeight: "600",
                    textTransform: "capitalize",
                    color: "success",
                    width: {

                        xs: '200px',
                        sm: '250px',
                        md: '250px',
                        lg: '250px',

                    },
                    height: {
                        xs: '50px',
                        sm: '60px',
                        md: '60px',
                        lg: '60px',
                    },
                    gap: "8px",
                    borderRadius: "128px",
                    border: "1px solid",
                    opacity: 1,
                    padding:  {
                        xs: "5px 10px",
                        sm: "10px 20px",
                        md: "15px 30px",
                        lg: "20px 40px",
                    },

                }}
            >
                {btnName}
            </Button>
        </Box>
    );
}

export default ButtonBtn;
