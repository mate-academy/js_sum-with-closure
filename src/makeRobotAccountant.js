'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let timesCalled = 0;

  function add(num1) {
    let sum = num1;

    timesCalled++;

    return num2 => {
      sum += num2;

      if (timesCalled > 3 && timesCalled % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
