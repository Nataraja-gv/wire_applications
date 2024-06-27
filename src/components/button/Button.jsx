import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const ButtonBtn = ({ btnName }) => {
  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: {
            xs: "16px",
            sm: "20px",
            md: "20px",
            lg: "20px",
          },
          fontWeight: "600",
          textTransform: "capitalize",
           
          width: {
            xs: "150px",
            sm: "200px",
            md: "250px",
            lg: "250px",
          },
          height: {
            xs: "40px",
            sm: "50px",
            md: "60px",
            lg: "60px",
          },
          gap: "8px",
          borderRadius: "128px",
          border: "1px solid",
          opacity: 1,
          padding: {
            xs: "0px 0px",
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
};

export default ButtonBtn;
