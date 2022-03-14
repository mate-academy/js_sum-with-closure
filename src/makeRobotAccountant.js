'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const errorMessage = `Bzzz... Error!`;

  const getSum = (firstElemen) => {
    counter++;

    return (secondElement) => {
      if (counter > 3 && counter % 2 === 0) {
        return errorMessage;
      }

      return firstElemen + secondElement;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
