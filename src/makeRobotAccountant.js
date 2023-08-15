'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const ERROR_MESSAGE = 'Bzzz... Error!';
  const MAX_DIGIT_CALLS = 3;

  return (firstNumCall) => {
    count++;

    return (secondNumCall) => {
      const isCountAreEven = count % 2 === 0;

      if (count > MAX_DIGIT_CALLS && isCountAreEven) {
        return ERROR_MESSAGE;
      }

      return firstNumCall + secondNumCall;
    };
  };
}

module.exports = makeRobotAccountant;
