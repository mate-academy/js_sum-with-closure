'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firsNumber) => {
    return (secondNumber) => {
      counter++;

      if (counter === 4) {
        return 'Bzzz... Error!';
      }

      return firsNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
