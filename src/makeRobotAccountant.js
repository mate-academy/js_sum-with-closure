'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;
  const errorMessage = 'Bzzz... Error!';

  return (a) => {
    return (b) => {
      if (count === 4) {
        count++;

        return errorMessage;
      } else if (count % 2 !== 0 || count < 4) {
        count++;

        return a + b;
      };
    };
  };
}

module.exports = makeRobotAccountant;
