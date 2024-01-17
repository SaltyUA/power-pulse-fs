export const getCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  return `${day}-${month}-${year}`;
}

export const setBodyOverflow = (showModal) => {
  if (showModal) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
};
