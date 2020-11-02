const monthDict = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

// converts `yyyy-mm` date to `MonthName Year`
const prettifyMonth = (date) => {
  let result = "";

  if (date) {
    const parts = date.split("-");

    result = `${monthDict[parts[1]]} ${parts[0]}`;
  }

  return result;
};

export default prettifyMonth;
