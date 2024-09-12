'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (value1) => {
    count++;

    return (value2) => {
      if (count <= 3 || count % 2 !== 0) {
        return value1 + value2;
      } else {
        return `Bzzz... Error!`;
      }
    };
  };
}

module.exports = makeRobotAccountant;
