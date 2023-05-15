'use strict';

function makeRobotAccountant() {
  let count = 0;

  const sum = num1 => {
    count++;

    return num2 => {
      let result = num1 + num2;

      if (count > 3) {
        if (count >= 4 && count % 2 !== 0) {
          return result;
        }

        result = 'Bzzz... Error!';
      }

      return result;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
