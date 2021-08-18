'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (a) => {
    callCount++;

    if (callCount % 2 === 0 && callCount > 3) {
      return (b) => {
        return 'Bzzz... Error!';
      };
    } else {
      return (b) => {
        return a + b;
      };
    }
  };
}

module.exports = makeRobotAccountant;
