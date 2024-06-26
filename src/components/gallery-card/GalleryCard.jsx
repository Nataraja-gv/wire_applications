import { Card } from "@mui/material";

export default function GalleryCard({ Image }) {
  return (
    <Card
      sx={{
        width: "100%",
        // boxShadow: 'none',
        // border: "none",
        // outline: 'none',
        // backgroundColor: 'transparent'
        // padding: "15px"
        height: {
          xs: "180px",
          sm: "230px",
          md: "230px",
          lg: "230px",
        },
      }}
    >
      <img
        src={Image}
        alt=""
        style={{ width: "100%", height: "230px", borderRadius: "5px" }}
      />
    </Card>
  );
}
