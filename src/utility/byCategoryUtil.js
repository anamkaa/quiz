export const filterByCategory = (quiz, byCategory) => {
  if (byCategory) {
    return quiz.filter((item) => {
      return item.categoryName === byCategory;
    });
  }

  return quiz;
};
