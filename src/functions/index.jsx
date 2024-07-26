export const getDate2to2 = (date) => {
    let now = new Date();
    if (date) {
        now = new Date(date);
    }
    // Set the time to 2 AM
    now.setHours(2);
    now.setMinutes(1);
    now.setSeconds(0);
    now.setMilliseconds(0);

    // Calculate the end time (1:59 AM the next day)
    let endTime = new Date(now);
    endTime.setDate(endTime.getDate() + 1);
    endTime.setHours(2);
    endTime.setMinutes(0);
    endTime.setSeconds(0);
    endTime.setMilliseconds(0);

    return [updateTimeFormate(now.toString()), updateTimeFormate(endTime.toString())];
}