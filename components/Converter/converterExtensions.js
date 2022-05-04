const decimalRound = (number, decimalPlaces) => {
  let places = Math.pow(10, decimalPlaces);

  return Math.round((number + Number.EPSILON) * places) / places;
};

export { decimalRound };
