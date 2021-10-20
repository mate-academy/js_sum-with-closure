'use strict';

function makeRobotAccountant() {
  let sumCounter = 0;

  return (x) => {
    return (y) => {
      const result = x + y;

      sumCounter++;

      if (sumCounter > 3 && sumCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
