'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let previousValue;
  let counter = 0;

  const getSum = (inputNumber) => {
    if (!previousValue) {
      previousValue = inputNumber;
      counter++;

      return getSum;
    }

    if (counter > 3 && counter % 2 === 0) {
      previousValue = undefined;

      return 'Bzzz... Error!';
    }

    const temporaryPreviousValue = previousValue;

    previousValue = undefined;

    return temporaryPreviousValue + inputNumber;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
