export const calculateWin = (positionCat) => {
  if (positionCat < 11) return true;
  else if (positionCat > 89) return true;
  else if ((positionCat / 10).toString().split(".")[1] === "1") return true;
  else if (!(positionCat / 10).toString().split(".")[1]) return true;
  else return false;
};

const validateLeft = (position) => {
  if ((position / 10).toString().split(".")[1]) {
    return true;
  }
};
const validateRigth = (position) => {
  if ((position / 10).toString().split(".")[1] !== "1") {
    return true;
  }
};

export const calculatePosibilities = (positionCat, casilla) => {
  let tempPosibility = [];
  let tempPosibilityFilter = [];

  let position1 = positionCat - 11;
  let position2 = positionCat - 10;
  let position3 = positionCat - 9;
  let position4 = positionCat - 1;
  let position5 = positionCat + 1;
  let position6 = positionCat + 9;
  let position7 = positionCat + 10;
  let position8 = positionCat + 11;

  if (position1 > 0 && validateLeft(position1)) tempPosibility.push(position1);

  if (position2 > 0) tempPosibility.push(position2);

  if (position3 > 0 && validateRigth(position3)) tempPosibility.push(position3);

  if (validateLeft(position4)) tempPosibility.push(position4);

  if (validateRigth(position5)) tempPosibility.push(position5);

  if (position6 < 100 && validateLeft(position6))
    tempPosibility.push(position6);
  if (position7 < 100) tempPosibility.push(position7);
  if (position8 < 100 && validateRigth(position8))
    tempPosibility.push(position8);

  tempPosibility.map((posibility) => {
    let validate = casilla.find(
      (user) => user.id === posibility && user.light === 1
    );

    if (!validate) tempPosibilityFilter.push(posibility);
  });

  return tempPosibilityFilter;
};

export const calculateBestPosibility = (positionCat, posibilities) => {
  if (posibilities.length === 0) return positionCat;

  return posibilities[Math.floor(Math.random() * posibilities.length)];
};
