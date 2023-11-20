export function findUser(
  usersObj,
  userEmail,
  userPassword,
  userType,
  providerType,
) {
  for (const key in usersObj) {
    if (key === userEmail) {
      if (usersObj[key]?.password === userPassword) {
        if (
          usersObj[key]?.providerType === providerType &&
          usersObj[key]?.userType === userType &&
          providerType !== undefined
        ) {
          return true;
        } else if (
          providerType === undefined &&
          usersObj[key]?.userType === userType
        ) {
          return true;
        }
      }
    }
  }
}

export function mobileNumberFormatter(number) {
  const cleanedNumber = number.toString().replace(/\D/g, '');
  const formattedNumber = `(${cleanedNumber.substring(
    0,
    3,
  )})-${cleanedNumber.substring(3, 6)}-${cleanedNumber.substring(6, 10)}`;

  return formattedNumber;
}

export function formatDate(date) {
  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}
