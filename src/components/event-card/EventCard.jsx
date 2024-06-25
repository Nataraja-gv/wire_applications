import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { theme } from "../../theme";



export default function EventCards({ Image, Title }) {
    return (

        <Card sx={{
            width: '100%',
            boxShadow: 'none',  
            border: "none",
            outline: 'none',
            backgroundColor: 'transparent' ,
            // backgroundColor:"red" ,
            height:"450px",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",

        }} >
            <img src={Image} alt='' style={{ width: "100%", height: "350px",borderColor:"  #eeeeee" ,borderRadius:"5px"}} />
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
