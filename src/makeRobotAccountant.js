'use strict';
/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (number) => {
    return function(x) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number + x;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
