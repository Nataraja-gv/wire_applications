import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./menu.css";

export default function MenuCard({ Image, MenuName, Pages }) {
  return (
    <Card
      sx={{
        width: "100%",
        padding: "15px",
        height: {
          xs: "230px",
          sm: "350px",
          md: "350px",
          lg: "350px",
        },
        borderRadius: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0.2, 0, 0.5)",
      }}
    >
      <img
        src={Image}
        alt=""
        className="menucard-image"
        style={{ width: "100%", borderRadius: "5px" }}
      />
      <CardContent sx={{ textAlign: "start" }}>
        <Typography
          variant="menutitle"
          sx={{
            fontSize: {
              xs: "14px",
              md: "16px",
              sm: "16px",
            },
          }}
        >
          {MenuName}
        </Typography>
        <Typography variant="body2">{Pages} Pages</Typography>
      </CardContent>
    </Card>
  );
}
