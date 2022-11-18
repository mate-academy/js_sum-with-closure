'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const addTwoNumbers = (x) => {
    callCount++;

    if (callCount > 3 && callCount % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (y) => x + y;
  };

  return addTwoNumbers;
}

module.exports = makeRobotAccountant;
