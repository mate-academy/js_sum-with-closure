'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let count = 0;

  return (a) => {
    count++;

    return (b) => {
      return count > 3 && count % 2 === 0 ? errorMessage : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
