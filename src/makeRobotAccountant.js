'use strict';

/**
 *
 * @return {function}
 */

const makeRobotAccountant = () => {
  let count = 0;

  return (num1) => {
    return (num2) => {
      count++;

      if (count >= 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return num1 + num2;
      }
    };
  };
};

module.exports = makeRobotAccountant;
