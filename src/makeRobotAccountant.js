'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function firstOperand(arg1) {
    return function secondOperand(arg2) {
      count++;

      if (count < 3 || count % 2 !== 0) {
        return (arg1 + arg2);
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
