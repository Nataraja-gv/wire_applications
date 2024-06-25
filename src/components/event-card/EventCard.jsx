import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { theme } from "../../theme";
import  "./eventcard.css"



export default function EventCards({ Image, Title }) {
    return (

        <Card sx={{
            width: '100%',
            boxShadow: 'none',  
            border: "none",
            outline: 'none',
            backgroundColor: 'transparent' ,
            // backgroundColor:"red" ,
            height: {
                xs:"400px",
                sm:"400px",
                md:"400px",
                lg:"450px"
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",

        }} >
            <img src={Image} alt='' className="eventimages" style={{ width: "100%",borderColor:"  #eeeeee" ,borderRadius:"5px"}} />
            <CardContent>
                <Typography gutterBottom sx={theme.typography.eventh1}>
                    {Title}
                </Typography>
                <Typography sx={theme.typography.eventtime}>
                    June 10, 2024 | 5:00 PM
                </Typography>
                <Typography sx={theme.typography.onWardsTitle} >
                    1000 onwards
                </Typography>
            </CardContent>
        </Card>

    );
}
