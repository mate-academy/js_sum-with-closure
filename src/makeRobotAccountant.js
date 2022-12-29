'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let countAttempt = 0;
  const getSum = (a) => {
    countAttempt++;

    if (countAttempt > 3 && countAttempt % 2 === 0) {
      return () => {
        return errorMessage;
      };
    } else if (countAttempt > 3 && countAttempt % 2 !== 0) {
      return (b) => {
        return a + b;
      };
    } else {
      return (b) => {
        return a + b;
      };
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
