'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return function counter(first) {
    count += 1;

    return function sum(second) {
      if (count > 3 && count % 2 === 1) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };
}

module.exports = makeRobotAccountant;
