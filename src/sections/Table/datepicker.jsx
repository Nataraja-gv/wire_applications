/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const DateSelector = ({
  selectedDate,
  onDateChange,
  dateClick,
  setDateClick,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const handleIconButtonClick = () => setShowDatePicker(true);
  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format();
    onDateChange(formattedDate);
    const today = dayjs().startOf("day");
    const selectedDate = dayjs(formattedDate).startOf("day");
    const isToday = selectedDate.isSame(today, "day");
    const isTomorrow = selectedDate.isSame(today.add(1, "day"), "day");
    setDateClick(isToday ? "Today" : isTomorrow ? "Tomorrow" : null);
    setShowDatePicker(false);
  };
  useEffect(() => {
    if (selectedDate) {
      setShowDatePicker(false);
    }
  }, [selectedDate]);
  return (
    <Box
      sx={{
        border: "1px solid rgba(2, 118, 229, 1)",
        borderRadius: "4px",
        padding: "2px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={handleIconButtonClick}
      >
        <IconButton>
          <img src={<CalendarMonthIcon/>}/>
        </IconButton>
        {showDatePicker && (
          <Box
            sx={{
              position: "absolute",
              bottom: "5px",
              left: "2px",
              zIndex: 10,
            }}
          >
            <DatePicker
              onChange={handleDateChange}
              value={dayjs(selectedDate)}
              renderInput={() => null}
              open
              sx={{
                "& .MuiInputBase-root": {
                  visibility: "hidden", // Hide the input field
                },
              }}
              PopoverProps={{
                // Customization for the popover
                sx: {
                  "& .MuiPaper-root": {
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                  },
                },
              }}
              TextFieldComponent={() => null}
              disablePast
              onClose={() => setShowDatePicker(false)}
            />
          </Box>
        )}
        <Typography variant="caption">
          {selectedDate
            ? dayjs(selectedDate).format("DD MMM")
            : dayjs().format("DD MMM")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginLeft: "20px",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: dateClick === "Today" ? "rgba(2, 118, 229, 1)" : "black",
          }}
          onClick={() => handleDateChange(dayjs().format())}
        >
          Today
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: dateClick === "Tomorrow" ? "rgba(2, 118, 229, 1)" : "black",
          }}
          onClick={() => handleDateChange(dayjs().add(1, "day").format())}
        >
          Tomorrow
        </Typography>
      </Box>
    </Box>
  );
};
