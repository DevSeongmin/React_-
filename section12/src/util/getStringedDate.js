export const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date}`;
};
