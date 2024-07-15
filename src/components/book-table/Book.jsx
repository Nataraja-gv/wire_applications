import { Grid, Typography, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Toca",
    label: "Toca",
  },
  {
    value: "Catch Up",
    label: "Catch Up",
  },
  {
    value: "Just BLR",
    label: "Just BLR",
  },
  {
    value: "MaCow",
    label: "MaCow",
  },
];

const Book = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "20px",
        borderRadius: "10px",
        display: "inline-block",
        border: "1px solid #FFFFFF",
        backgroundColor: " #FFFFFFB2",
        opacity: "1",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="title">Book a Table</Typography>
        </Grid>

        
        <Grid
          item
          xs={12}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            size="small"
            fullWidth
            id="outlined-select-currency"
            select
            label="Select Outlet"
            // defaultValue="Select Outlet"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid></Grid>
      </Grid>
    </Box>
  );
};

export default Book;
