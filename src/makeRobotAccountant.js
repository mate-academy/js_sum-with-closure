'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (x) => (y) => {
    callsCount++;

    if (callsCount > 3 && callsCount % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };
}

module.exports = makeRobotAccountant;
