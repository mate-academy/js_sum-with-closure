'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    // console.log(true)

    return (b) => {
      count++;

      const sum = a + b;

      if (count <= 3) {
        return sum;
      }

      if (count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
