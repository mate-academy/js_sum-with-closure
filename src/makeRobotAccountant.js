'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfAccount = 0;

  return (first) => {
    return (second) => {
      countOfAccount++;

      if (countOfAccount > 3 && countOfAccount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };
}

module.exports = makeRobotAccountant;
