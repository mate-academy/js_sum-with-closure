'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const MAX_CALLS = 3;
  let callsCount = 0;
  let isEven = false;
  const robotAccountant = (x = 0) => {
    isEven = !isEven;

    if (callsCount <= MAX_CALLS) {
      callsCount++;
    }

    return function(y) {
      if (callsCount <= MAX_CALLS) {
        return x + y;
      }

      return isEven
        ? x + y
        : 'Bzzz... Error!';
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
