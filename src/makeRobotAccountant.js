'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const calls = 3;

  return firstNumber => {
    return secondNumber => {
      count++;

      if ((count > calls) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
