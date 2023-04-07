'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCallCounter = 0;

  function sumOperation(firstNumber) {
    sumCallCounter++;

    function addNumbers(secondNumber) {
      if (sumCallCounter > 3 && sumCallCounter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    }

    return addNumbers;
  }

  return sumOperation;
}

module.exports = makeRobotAccountant;
