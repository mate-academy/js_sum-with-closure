'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => `Bzzz... Error!`;
    } else {
      return (b) => a + b;
    }
  };
}

module.exports = makeRobotAccountant;
