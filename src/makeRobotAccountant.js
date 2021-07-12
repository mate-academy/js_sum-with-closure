'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robotAccountant = (num1) => {
    count++;

    return (num2) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
