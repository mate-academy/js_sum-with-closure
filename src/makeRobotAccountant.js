'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  const result = (x) => {
    callCount++;

    return (y) => {
      if (callCount >= 4 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
