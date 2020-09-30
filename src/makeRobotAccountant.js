'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const firstAddition = (x) => {
    let total = x;

    const secondAddition = (y) => {
      total += y;
      counter++;

      if (counter > 3) {
        if (counter % 2 === 0) {
          return `Bzzz... Error!`;
        } else {
          return total;
        }
      }

      return total;
    };

    return secondAddition;
  };

  return firstAddition;
}

module.exports = makeRobotAccountant;
