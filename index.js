const mapToNegativize = (sourceArray) => {
  const negArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    negArr.push(sourceArray[i] * -1);
  }
  return negArr;
};

const mapToNoChange = (sourceArray) => {
  return sourceArray;
};

const mapToDouble = (sourceArray) => {
  const doubleArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    doubleArr.push(sourceArray[i] * 2);
  }
  return doubleArr;
};

const mapToSquare = (sourceArray) => {
  const squareArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    squareArr.push(sourceArray[i] ** 2);
  }
  return squareArr;
};

const reduceToTotal = (sourceArray, startingPoint) => {
  let total = null;
  startingPoint !== undefined ? (total = startingPoint) : (total = 0);

  for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i];
  }
  return total;
};

const reduceToAllTrue = (sourceArray) => {
  let allTrue = true;
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      allTrue = false;
    }
  }
  return allTrue;
};

const reduceToAnyTrue = (sourceArray) => {
  let foundTrue = false;
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) {
      foundTrue = true;
    }
  }
  return foundTrue;
};
