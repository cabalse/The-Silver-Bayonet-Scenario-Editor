const addToArray = (array, value) => {
  if (array.indexOf(value) === -1) {
    array.push(value);
  }
};

export default addToArray;
