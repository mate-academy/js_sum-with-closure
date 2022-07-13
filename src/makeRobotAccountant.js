'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (num1) => {
    return (num2) => {
      if (count <= 3) {
        count++;

        return num1 + num2;
      } else if (count > 3 && count % 2 !== 0) {
        count++;

        return num1 + num2;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
