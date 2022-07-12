'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (valueX) => {
    callCount++;

    return (valueY) => {
      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return valueX + valueY;
    };
  };
}

module.exports = makeRobotAccountant;
