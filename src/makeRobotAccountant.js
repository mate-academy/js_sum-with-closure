'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const addNumber = function(firstNumber) {
    count++;

    return (secondNumber) => (count > 3 && count % 2 === 0)
      ? `Bzzz... Error!`
      : firstNumber + secondNumber;
  };

  return addNumber;
}

module.exports = makeRobotAccountant;
