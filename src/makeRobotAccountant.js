'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const message = 'Bzzz... Error!';

  return (a) => {
    return (b) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return message;
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
