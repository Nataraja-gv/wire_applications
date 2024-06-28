import Typography from "@mui/material/Typography";
import "./menu.css";
import { Box } from "@mui/material";

export default function MenuCard({ image, menuname, pages }) {
  return (
    <Box
      sx={{
        border: "2px solid #eeeeee",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <img
        src={image}
        alt=""
        className="menucard-image"
        style={{ width: "100%", borderRadius: "5px" }}
      />

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
        {menuname}
      </Typography>
      <Typography variant="body2">{pages} Pages</Typography>
    </Box>
  );
}
