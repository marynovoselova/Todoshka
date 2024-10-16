export const getDeclinedForm = (count: number, forms: [string, string, string]): string => {
  const remainder100 = count % 100;
  const remainder10 = count % 10;

  if (remainder100 >= 11 && remainder100 <= 19) {
    return forms[2];
  }

  switch (remainder10) {
    case 1:
      return forms[0];
    case 2:
    case 3:
    case 4:
      return forms[1];
    default:
      return forms[2];
  }
};
