'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const result = (x) => {
    return (y) => {
      count++;

      const evenOccurrence = (count >= 3 && count % 2 === 0);

      return evenOccurrence ? 'Bzzz... Error!' : x + y;
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
