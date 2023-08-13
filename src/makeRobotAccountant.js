'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const ERROR_MESSAGE = 'Bzzz... Error!';

  return (a) => {
    return (b) => {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return a + b;
      }

      return ERROR_MESSAGE;
    };
  };
}

module.exports = makeRobotAccountant;
