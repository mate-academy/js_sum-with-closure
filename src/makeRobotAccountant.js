'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let amount = 0;

  return (num) => {
    return (num1) => {
      amount++;

      if (amount > 3 && amount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return num + num1;
      };
    };
  };
}

module.exports = makeRobotAccountant;
