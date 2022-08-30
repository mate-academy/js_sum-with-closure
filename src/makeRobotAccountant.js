'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfOperations = 0;

  return (x) => {
    return (y) => {
      countOfOperations++;

      if (countOfOperations > 3 && countOfOperations % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
