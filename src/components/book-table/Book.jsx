import { theme } from "../../theme.js"; // Adjust the import path as necessary
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import   "./book.css"
const Book = () => {
    
    return (
        <Box sx={{
            padding: "20px",
            borderRadius: "10px",
            display: "inline-block",
            border: "1px solid #FFFFFF",
            backgroundColor: " #FFFFFFB2",
             
             
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{ ...theme.typography.title, fontWeight: 'bold', textAlign: 'start' }}>
                        Book a Table
                    </Typography>
                    <Typography sx={{
                        color:"black",
                        fontWeight: '600',
                    }}>
                        Our friendly team would love to hear from you.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography className="label"> 
                        First name
                    </Typography>
                    <TextField fullWidth sx={{  backgroundColor: "white",borderRadius:"5px"}} id="firstname" size='small' variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography className="label">
                        Last name
                    </Typography>
                    <TextField fullWidth sx={{ backgroundColor: "white",borderRadius:"5px" }} size='small' id="lastname" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Typography className="label">
                        Phone number
                    </Typography>
                    <TextField sx={{ backgroundColor: "white" ,borderRadius:"5px"}} id="phonenumber" fullWidth size='small' variant="outlined" />
                </Grid>

                <Grid item xs={12}>
                    <Typography className="label">
                        No. of Guests
                    </Typography>
                    <TextField
                        id="number-of-guests"
                        type="number"
                        sx={{ backgroundColor: "white", borderRadius:"5px" }}
                        variant="outlined"
                        size='small'
                        
                        fullWidth
                        inputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography className="label">
                        Message
                    </Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        sx={{ backgroundColor: "white", borderRadius:"5px" }}
                        multiline
                        maxRows={4}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained">
                        Send message
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Book;
