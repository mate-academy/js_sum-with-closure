'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return n => {
    return (m) => {
      count++;

      if (count < 4 || count % 2 !== 0) {
        return m + n;
      } else {
        return `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
