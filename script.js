"use strict";
//selecting elements
const currentDayOfTheWeek = document.querySelector("#currentDayOfTheWeek");
const currentUTCTime = document.querySelector("#currentUTCTime");
currentDayOfTheWeek.style.display = "inline";
currentUTCTime.style.display = "inline";

function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  const currentDay = daysOfWeek[dayIndex];

  const unixMilliSeconds = currentDate.getTime();
  currentDayOfTheWeek.textContent = currentDay;
  currentUTCTime.textContent = unixMilliSeconds;
}

// Calling the function to first set the day and time
updateDateTime();

// Set an interval to update the day and time every second
setInterval(updateDateTime, 1000);
