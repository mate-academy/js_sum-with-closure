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
    callsCount++;

    return function(y) {
      if (callsCount <= MAX_CALLS || callsCount % 2 !== 0) {
        return x + y;
      }
      
      return 'Bzzz... Error!';

      return isEven
        ? x + y
        : 'Bzzz... Error!';
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
