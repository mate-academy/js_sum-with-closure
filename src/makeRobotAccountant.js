'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  const errorMessage = 'Bzzz... Error!';
  const getSum = (x) => {
    return function(y) {
      callCount++;

      if (callCount < 4 || (callCount % 2 !== 0)) {
        return x + y;
      } else {
        return errorMessage;
      };
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
