'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;
  const errorMessage = 'Bzzz... Error!';

  return function(firstNumber = 0) {
    callsCount++;

    return (secondNumber = 0) => {
      return (callsCount > 3 && callsCount % 2 === 0)
        ? errorMessage : firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
