'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCals = 0;

  return (x) => {
    sumCals++;

    return (y) => {
      return (sumCals > 3 && !(sumCals % 2))
        ? 'Bzzz... Error!' : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
