'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1 = 0) => {
    count++;

    return (num2 = 0) => {
      if (count <= 3 || count % 2 !== 0) {
        return num1 + num2;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
