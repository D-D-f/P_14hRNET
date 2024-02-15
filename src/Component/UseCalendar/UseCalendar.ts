export const getDays = (year: number, month: number, day: number) => {
  if (month < 3) {
    month + 12;
    year--;
  }

  let q = day;
  let m = month;
  let K = year % 100;
  let J = year / 100;

  let h = (q + (13 * (m + 1)) / 5 + K + K / 4 + J / 4 - 2 * J) % 7;

  if (h < 0) {
    h += 7;
  }

  console.log(Math.floor(h));

  return Math.floor(h);
};
