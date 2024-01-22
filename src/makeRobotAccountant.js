'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function add(num1) {
    let sum = num1;

    count++;

    return num2 => {
      sum += num2;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
