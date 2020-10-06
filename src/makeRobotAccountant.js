'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getTotal = (number1) => {
    return (number2) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return number1 + number2;
      }
    };
  };

  return getTotal;
}

module.exports = makeRobotAccountant;
