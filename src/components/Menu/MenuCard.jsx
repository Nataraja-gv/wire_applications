import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MenuCard({ Image, MenuName, Pages }) {
  return (
    <Card sx={{
      width: '100%',
      padding: "15px",
      height: "350px",
      borderRadius: "10px",
      boxShadow: "0px 2px 4px rgba(0, 0.2, 0, 0.5)",
    }}>
      <img src={Image} alt='' style={{ width: "100%", height: "250px", borderRadius: "5px" }} />
      <CardContent sx={{ textAlign: "start", }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {MenuName}
        </Typography>
        <Typography variant="body2">
          {Pages} Pages
        </Typography>
      </CardContent>
    </Card>
  );
}
