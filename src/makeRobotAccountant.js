'use strict';

/**
 * function(num1)(num2) === num1 + num2;
 * @return {function}
 */

function makeRobotAccountant() {
  let errorCounter = 3;

  return (firstValue) => {
    return (secondValue) => {
      if (errorCounter === 0) {
        errorCounter++;

        return 'Bzzz... Error!';
      }

      errorCounter--;

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
