'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countFunctionCall = 0;

  return (a) => {
    return (b) => {
      countFunctionCall++;

      if (countFunctionCall < 4
        || (countFunctionCall >= 4 && countFunctionCall % 2 !== 0)) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
