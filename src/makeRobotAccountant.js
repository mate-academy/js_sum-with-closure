'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let tries = 0;

  return (num1) => {
    return (num2) => {
      tries++;

      if (tries > 3 && tries % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
