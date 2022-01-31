'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return function(a) {
    callCounter++;

    if (callCounter > 3 && callCounter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (b) => a + b;
  };
}

module.exports = makeRobotAccountant;
