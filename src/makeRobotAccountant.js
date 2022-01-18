'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let operations = 0;

  return (a) => {
    return (b) => {
      operations++;

      return operations > 3 && operations % 2 === 0
        ? errorMessage
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
