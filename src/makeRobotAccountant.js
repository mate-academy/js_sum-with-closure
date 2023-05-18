'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const result = (x) => {
    const sum = (y) => {
      callCount++;

      if (callCount >= 4 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return sum;
  };

  return result;
}

module.exports = makeRobotAccountant;
