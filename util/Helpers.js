export function findUser(usersObj, userEmail, userType, providerType) {
  for (const key in usersObj) {
    console.log(usersObj[key], userType, providerType);
    if (key === userEmail) {
      usersObj[key]?.providerType === providerType &&
      usersObj[key]?.userType === userType
        ? true
        : false;
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
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}
