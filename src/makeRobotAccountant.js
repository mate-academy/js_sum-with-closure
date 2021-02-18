'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstValue) => {
    counter++;

    return (secondValue) => {
      const sum = firstValue + secondValue;
      const errorMessage = 'Bzzz... Error!';

      if (counter % 2 === 0
        && (counter >= 3 && typeof sum === 'number')
      ) {
        return errorMessage;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
