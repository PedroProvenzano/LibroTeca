export const MayusMaker = (word) => {
  let firstLetter = word.slice(0, 1).toUpperCase();
  let restLetters = word.slice(1, word.length);
  return firstLetter + restLetters;
};

export const pasarPagina = (
  page,
  totalPages,
  ElementsPerPage,
  totalElements
) => {
  let from;
  let to;
  // Nuevo
  if (page === totalPages) {
    if (totalElements % totalPages === 0) {
      from = ElementsPerPage * (page - 1);
      to = from + ElementsPerPage;
    } else {
      from = ElementsPerPage * (page - 1);
      to = totalElements;
    }
  } else if (page === 1) {
    from = 0;
    to = 10;
  } else {
    from = ElementsPerPage * (page - 1);
    to = from + ElementsPerPage;
  }
  return [from, to];
};
