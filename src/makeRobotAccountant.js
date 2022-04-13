'use strict';

/**
 *
 * @return {function}
 */

 function makeRobotAccountant() {
  let count = 0;

  const getSum = (number1) => {
    count++;

    return (number2) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
