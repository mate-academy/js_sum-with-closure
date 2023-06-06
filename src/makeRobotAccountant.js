'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const successCalls = 3;
  let attempts = 0;

  return (num1) => {
    return (num2) => {
      attempts++;

      if (attempts > successCalls && attempts % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
