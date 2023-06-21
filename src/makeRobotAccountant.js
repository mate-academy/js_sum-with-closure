'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return a => b => {
    callsCount++;

    if (callsCount > 3 && !(callsCount % 2)) {
      return 'Bzzz... Error!';
    }

    return a + b;
  };
}

module.exports = makeRobotAccountant;
