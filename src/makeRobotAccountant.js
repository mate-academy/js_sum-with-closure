'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const output = (a) => {
    return (b) => {
      ++counter;

      const evenCondition = (counter >= 3 && counter % 2 === 0);

      return evenCondition ? 'Bzzz... Error!' : a + b;
    };
  };

  return output;
}
module.exports = makeRobotAccountant;
