'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let temp = 0;

  return (firsNumber) => {
    return (secondNumber) => {
      temp++;

      if (temp > 3 && temp % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firsNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
