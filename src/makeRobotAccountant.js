'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCall = 0;

  function firstParam(value1) {
    function secondParam(value2) {
      numberOfCall++;

      if (numberOfCall > 3 && numberOfCall % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return value1 + value2;
    }

    return secondParam;
  }

  return firstParam;
}

module.exports = makeRobotAccountant;
