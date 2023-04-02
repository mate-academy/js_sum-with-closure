'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumCallCounter = 0;

  function sumOperation(firstNumber) {
    sumCallCounter += 1;

    function AddNumbers(secondNumber) {
      if (sumCallCounter > 3 && sumCallCounter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNumber;
      }
    }

    return AddNumbers;
  }

  return sumOperation;
}

module.exports = makeRobotAccountant;
