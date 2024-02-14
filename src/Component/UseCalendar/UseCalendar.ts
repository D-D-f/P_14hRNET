export const allDate = {
  days: {
    Mon: new Set(),
    Tue: new Set(),
    Wed: new Set(),
    Thu: new Set(),
    Fri: new Set(),
    Sat: new Set(),
    Sun: new Set(),
  },
};

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

  switch (Math.floor(h)) {
    case 0:
      allDate.days.Fri.add(q);
      break;
    case 1:
      allDate.days.Sat.add(q);
      break;
    case 2:
      allDate.days.Sun.add(q);
      break;
    case 3:
      allDate.days.Mon.add(q);
      break;
    case 4:
      allDate.days.Tue.add(q);
      break;
    case 5:
      allDate.days.Wed.add(q);
      break;
    case 6:
      allDate.days.Thu.add(q);
      break;
  }

  return Math.floor(h);
};
