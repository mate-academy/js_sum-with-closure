'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let count = 0;

  return (a) => {
    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
