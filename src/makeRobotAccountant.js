'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (nmbr1 = 0) => {
    return (nmbr2 = 0) => {
      count++;

      const evenCalls = count > 3 && count % 2 === 0;

      return evenCalls
        ? `Bzzz... Error!`
        : nmbr1 + nmbr2;
    };
  };
}

module.exports = makeRobotAccountant;
