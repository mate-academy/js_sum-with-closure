'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const sum = (a) => {
    callsCount++;

    return (b) => {
      if (callsCount > 3 && callsCount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
