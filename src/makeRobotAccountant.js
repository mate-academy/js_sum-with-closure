'use strict';

function makeRobotAccountant() {
  let count = 0;

  const sumOne = (num1) => {
    count++;

    let sum = num1;

    const sumTwo = (num2) => {
      sum += num2;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return sumTwo;
  };

  return sumOne;
}

module.exports = makeRobotAccountant;
