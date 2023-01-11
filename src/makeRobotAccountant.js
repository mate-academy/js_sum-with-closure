'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (callFirst) => {
    callCounter++;

    return (callSecond) => {
      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return callFirst + callSecond;
      }
    };
  };
}

module.exports = makeRobotAccountant;
