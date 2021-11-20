'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (x) => {
    return (y) => {
      callCounter++;

      if (callCounter <= 3) {
        return x + y;
      } else if (callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
