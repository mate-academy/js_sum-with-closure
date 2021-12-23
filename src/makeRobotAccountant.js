'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (num1) => {
    const sum = (num2) => {
      count++;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };

    return sum;
  };

  return getSum;
  // let count = 0;

  // const countSum = (value = 0) => {
  //   count++;

  //   return (secondValue = 0) => count > 3 && count % 2 === 0
  //     ? 'Bzzz... Error!'
  //     : value + secondValue;
  // };

  // return countSum;
}

module.exports = makeRobotAccountant;
