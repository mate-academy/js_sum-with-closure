'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let isProblematic = false;
  const ERROR_MESSAGE = 'Bzzz... Error!';

  const getSumFunction = (x) => {
    return function(y) {
      counter++;

      if (counter >= 3) {
        isProblematic = true;
      }

      if (isProblematic && counter % 2 === 0) {
        return ERROR_MESSAGE;
      } else {
        return x + y;
      }
    };
  };

  return getSumFunction;
}

module.exports = makeRobotAccountant;
