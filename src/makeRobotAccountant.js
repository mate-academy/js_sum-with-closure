'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (x) => (y) => {
    callsCount++;

    if (callsCount <= 3 || callsCount % 2 !== 0) {
      return x + y;
    }

    return 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
