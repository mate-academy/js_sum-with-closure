'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return first => {
    return second => {
      count += 1;

      if (count < 4 || count % 2 !== 0) {
        return first + second;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
