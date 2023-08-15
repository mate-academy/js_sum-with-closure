'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const errorMessage = 'Bzzz... Error!';

  return (firstCallNumber) => {
    return (secondCallNumber) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return errorMessage;
      }

      return firstCallNumber + secondCallNumber;
    };
  };
}

module.exports = makeRobotAccountant;
