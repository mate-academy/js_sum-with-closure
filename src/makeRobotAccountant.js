'use strict';

function makeRobotAccountant() {
  let count = 0;

  return (num1) => {
    count++;

    let sum = num1;

    return (num2) => {
      sum += num2;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
