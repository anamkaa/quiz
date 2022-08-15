export const filterByLevel = (quiz, byLevel) => {
  if (byLevel) {
    return quiz.filter((item) => {
      return item.level === byLevel;
    });
  }

  return quiz;
};
