'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return first => {
    count++;

    return second => {
      if (count >= 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };
}

module.exports = makeRobotAccountant;
