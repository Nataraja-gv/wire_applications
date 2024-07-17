import {
  Grid,
  Typography,
  Box,
  Stack,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import dayjs from "dayjs";
import calendra from "../../assets/calender.svg";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const textDay = {
  padding: "2px 10px",
  background: "rgba(242, 248, 253, 1)",
  borderRadius: "60px",
  color: "rgba(2, 118, 229, 1)",
  cursor: "pointer",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Toca",
  "Just Blr",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Book = () => {
  const theme = useTheme();
  const [selectedData, setSelectedData] = useState(null);
  const [personName, setPersonName] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateClick, setDateClick] = useState("Today");
  const [selectedDate, setSelectedDate] = useState(null);
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  let maxItems;
  if (isSmallScreen) {
    maxItems = 4;
  } else if (isMediumScreen) {
    maxItems = 6;
  } else {
    maxItems = 9;
  }

  const handleIconButtonClick = () => {
    setShowDatePicker(true);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCurrentDate((prev) => ({
      ...prev,
      [tabName]: getDate2to2(dayjs(date).format()),
    }));
    const today = dayjs().startOf("day");
    const selectedDate = dayjs(date).startOf("day");
    const isToday = selectedDate.isSame(today, "day");
    const isTomorrow = selectedDate.isSame(today.add(1, "day"), "day");

    if (isToday) {
      setDateClick("Today");
    } else if (isTomorrow) {
      setDateClick("Tomorrow");
    } else {
      setDateClick(null);
    }
    setShowDatePicker(false); // Close DatePicker on date selection
    setPage(0);
  };

  useEffect(() => {
    if (selectedDate) {
      setShowDatePicker(false);
    }
  }, [selectedDate]);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "30px ",
        gap: "8px",
        borderRadius: "20px",
        border: "1px solid #FFFFFF",
        backgroundColor: "#FFFFFFB2",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="title">Book a Table</Typography>
        </Grid>

        <div style={{ width: "100%" }}>
          <FormControl sx={{ mb: 1, width: "100%", mt: 3 }}>
            <Select
              multiple
              displayEmpty
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em style={{ fontSize: "14px" }}>Select Outlets</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                fontSize: "14px",
                backgroundColor: "white",
                // borderColor: {
                //   "&:hover": {
                //     border: "1px solid #8976fd",
                //     backgroundColor: "white",
                //     outline:"none"
                //   },
                // },
              }}
              size="small"
            >
              <MenuItem disabled value="">
                <em>Placeholder</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Box>
          <Typography sx={{ color: "#2A2A2A", fontWeight: "600" }}>
            Adults
          </Typography>

          <Stack
            direction="row"
            width="100%"
            sx={{ justifyContent: "center", alignItems: "center", gap: "0.8px" }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "0.8px"
              }}
            >
              {[...Array(maxItems)].map((_, index) => (
                <MenuItem
                  key={index + 1}
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "2px",


                    borderColor: {
                      "&:hover": {
                        border: "2px solid #8976fd",
                        backgroundColor: "white",
                      },

                    },

                    backgroundColor: "white",
                  }}
                >
                  {index + 1}
                </MenuItem>
              ))}
            </Stack>




            <Stack >
              <TextField
                type="number"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  border: "none",       // To remove the border
                  outline: "none",
                  border: "2px solid gray",

                  // To remove the outline
                }}
                required
                inputProps={{
                  min: 1,
                  step: 1,
                  pattern: "[0-9]*",
                }}
              />
            </Stack>
          </Stack>
        </Box>

        <Grid container  marginTop="10px">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                border: "1px solid rgba(2, 118, 229, 1)",
                borderRadius: "4px",
                padding: "2px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                BackGroundColor: "white",
                 backgroundColor:"white"
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  
                }}
                onClick={handleIconButtonClick}
              >
                <IconButton>
                  <img src={calendra} alt="no img" />
                </IconButton>
                {showDatePicker && (
                  <Box sx={{ position: "absolute", top: "300px" }}>
                    <DatePicker
                      onChange={handleDateChange}
                      renderInput={() => <TextField />}
                      open
                      disablePast
                      value={dayjs(selectedDate)}
                      sx={{ visibility: "hidden" }}
                      onClose={() => {
                        setShowDatePicker(false);
                      }}
                    />
                  </Box>
                )}
                <Typography variant="caption">
                  {selectedDate
                    ? dayjs(selectedDate).format("DD MMM")
                    : dayjs().format("DD MMM")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography
                  variant="caption"
                  sx={{
                    ...textDay,
                    color:
                      dateClick == "Today" ? "rgba(2, 118, 229, 1)" : "black",
                  }}
                  onClick={() => {
                    handleDateChange(dayjs().format());
                  }}
                >
                  Today
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    ...textDay,
                    color:
                      dateClick == "Tomorrow"
                        ? "rgba(2, 118, 229, 1)"
                        : "black",
                  }}
                  onClick={() => {
                    handleDateChange(dayjs().add(1, "day").format());
                  }}
                >
                  Tomorrow
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          width="100%"
          marginTop="10px"
          sx={{
            border: "1px solid rgba(2, 118, 229, 1)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            justifyContent: "center",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack>
              <Typography variant="">Lunch</Typography>
            </Stack>
            <Stack
              direction="row"
              onClick={() => {
                setLunch(!lunch);
              }}
              sx={{ cursor: "pointer", float: "right" }}
            >
              <Typography>12:30 to 1:30</Typography>
              {!lunch ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Stack>
          </Box>
          <Box>
            {lunch && (
              <Grid container spacing={2} marginTop="10px">
                {[...Array(8)].map((_, index) => (
                  <Grid item xs={3} sm={4} md={4} lg={3} key={index}>
                    <Typography
                      sx={{
                        border: "1px solid red",
                        textAlign: "center",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      12:30 PM
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>

        <Box
          width="100%"
          marginTop="10px"
          sx={{
            border: "1px solid rgba(2, 118, 229, 1)",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            padding: "8px",
            justifyContent: "center",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack>
              <Typography variant="">Dinner</Typography>
            </Stack>
            <Stack
              direction="row"
              onClick={() => {
                setDinner(!dinner);
              }}
              sx={{ cursor: "pointer", float: "right" }}
            >
              <Typography>7:30 to 10:30</Typography>
              {!dinner ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </Stack>
          </Box>
          <Box>
            {dinner && (
              <Grid container spacing={2} marginTop="10px">
                {[...Array(8)].map((_, index) => (
                  <Grid item xs={3} sm={4} md={4} lg={3} key={index}>
                    <Typography
                      sx={{
                        border: "1px solid red",
                        textAlign: "center",
                        borderRadius: "5px",
                        padding: "5px",
                      }}
                    >
                      12:30 PM
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Grid>

      <Button
        variant="contained"
        fullWidth
        sx={{
          marginTop: "10px",
          backgroundColor: "#8976fd",
        }}
      >
        <Typography sx={{ color: "white" }}>Reserve your Spot</Typography>
      </Button>
    </Box>
  );
};

export default Book;
