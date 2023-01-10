'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const add = (number) => {
    if (callCount >= 3) {
      callCount++;

      if (callCount % 2 === 0) {
        return () => 'Bzzz... Error!';
      }

      return nextNumber => number + nextNumber;
    }
    callCount++;

    return nextNumber => number + nextNumber;
  };

  return add;
}

module.exports = makeRobotAccountant;
