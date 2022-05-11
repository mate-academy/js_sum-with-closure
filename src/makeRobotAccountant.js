'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getAdd = (num1) => {
    count++;

    return function adder(num2) {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return getAdd;
}

module.exports = makeRobotAccountant;
