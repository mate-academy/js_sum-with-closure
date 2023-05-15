'use strict';

function makeRobotAccountant() {
  let count = 0;

  const sum = num1 => num2 => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return num1 + num2;
  };

  return sum;
}

module.exports = makeRobotAccountant;
