'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let getSumCounter = 0;

  return (numberOne) => {
    return (numberTwo) => {
      getSumCounter++;

      return getSumCounter > 3 && getSumCounter % 2 === 0
        ? 'Bzzz... Error!'
        : numberOne + numberTwo;
    };
  };
}

module.exports = makeRobotAccountant;
