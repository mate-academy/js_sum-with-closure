'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let startCount = 0;

  return (x) => {
    startCount++;

    return (y) => {
      if (startCount <= 3 || startCount % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
