import React from "react";

const useTimeAgo = (date) => {
  const getTimeAgo = () => {
    const now = new Date();
    const timestamp = date.getTime();
    const elapsed = now - timestamp;

    // Define time units in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;

    // Calculate time elapsed in different units
    const elapsedWeeks = Math.floor(elapsed / week);
    const elapsedDays = Math.floor(elapsed / day);
    const elapsedHours = Math.floor(elapsed / hour);
    const elapsedMinutes = Math.floor(elapsed / minute);

    // Return formatted time ago string
    if (elapsedWeeks > 0) {
      return `${elapsedWeeks} week${elapsedWeeks > 1 ? "s" : ""} ago`;
    } else if (elapsedDays > 0) {
      return `${elapsedDays} day${elapsedDays > 1 ? "s" : ""} ago`;
    } else if (elapsedHours > 0) {
      return `${elapsedHours} hour${elapsedHours > 1 ? "s" : ""} ago`;
    } else if (elapsedMinutes > 0) {
      return `${elapsedMinutes} minute${elapsedMinutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  return getTimeAgo();
};

// Usage
const MyComponent = ({ date }) => {
  const timeAgo = useTimeAgo(date);
  return <span>{timeAgo}</span>;
};
