'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firsNumber) => {
    return (secondNumber) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firsNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
