'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  const normalWorkBarrier = 3;
  let counter = 0;

  return (number1) => {
    return (number2) => {
      counter++;

      if (counter <= normalWorkBarrier || counter % 2 === 1) {
        return number1 + number2;
      } else {
        return errorMessage;
      }
    };
  };
}

module.exports = makeRobotAccountant;
