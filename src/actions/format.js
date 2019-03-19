// Return a date formatted: Dec 31, 2018
export const formatDate = (date) => {
  date = date?date:new Date();
  let d = new Date(date);
  let month = d.toLocaleString('en-US', { month: "short" });
  let day = d.getDate();
  let year = d.getFullYear();
  return month + ' ' + day + ', ' + year;
};

// Capitalize the first letter of a string, for name conventions
export const formatName = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// For optional values. Only return the value, otherwise nothing
export const optional = (value) => {
  if (value) {
    return value;
  }
}