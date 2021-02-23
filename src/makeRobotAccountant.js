'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const text = 'Bzzz... Error!';

  return (num2) => {
    return (num1) => {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return text;
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
