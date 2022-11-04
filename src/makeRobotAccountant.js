'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 1;

  return value1 => value2 => {

    if (callCounter >= 4 && callCounter % 2 === 0) {
      callCounter++;

      return 'Bzzz... Error!';
    }

    callCounter++;

    return value1 + value2;
  };
}

module.exports = makeRobotAccountant;
