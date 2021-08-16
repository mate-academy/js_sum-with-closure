'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (fistNumber) => {
    counter++;

    return (secondNumber) => {
      if (counter < 3 || counter % 2 === 1) {
        return fistNumber + secondNumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
