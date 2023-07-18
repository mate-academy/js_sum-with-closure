'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (num1) => {
    return (num2) => {
      calls++;

      if ((calls < 4) || ((calls % 2) !== 0)) {
        return num1 + num2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
