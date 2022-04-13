'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (num) => {
    count++;

    return function(num2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num + num2;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
