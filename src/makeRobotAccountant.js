'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (number1 = 0) => {
    return (number2 = 0) => {
      count++;

      const evenCalls = count > 3 && count % 2 === 0;

      return evenCalls
        ? `Bzzz... Error!`
        : number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
