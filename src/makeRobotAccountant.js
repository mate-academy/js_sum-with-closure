'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let fnCallsCounter = 0;

  const calculate = (number) => {
    fnCallsCounter++;

    return fnCallsCounter > 3 && fnCallsCounter % 2 === 0
      ? () => 'Bzzz... Error!'
      : (number2) => number + number2;
  };

  return calculate;
}

module.exports = makeRobotAccountant;
