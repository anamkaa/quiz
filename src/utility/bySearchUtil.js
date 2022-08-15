export const filterBySearch = (quiz, bySearch) => {
  if (bySearch) {
    return [...quiz].filter((item) => {
      return item.title.toLowerCase().includes(bySearch);
    });
  }
  return quiz;
};
