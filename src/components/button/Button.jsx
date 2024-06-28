import { Box } from "@mui/material";
import Button from "@mui/material/Button";

const ButtonBtn = ({ btnName }) => {
  return (
    <Box>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "128px",
        }}
      >
        {btnName}
      </Button>
    </Box>
  );
};

export default ButtonBtn;
