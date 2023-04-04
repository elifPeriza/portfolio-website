export const getDifferenceInDays = (date1: Date, date2: Date) => {
  const differenceInMilliseconds = date1.getTime() - date2.getTime();
  const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);
  return Math.floor(Math.abs(differenceInDays));
};
