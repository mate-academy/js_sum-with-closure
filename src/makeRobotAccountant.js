'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (numA) => {
    callsCount++;

    return (numB) => {
      return callsCount < 3 || callsCount % 2
        ? numA + numB
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
