'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let amount = 0;

  return (num) => {
    amount++;

    return (num1) => {
      if (amount > 3 && amount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return num + num1;
      };
    };
  };
}

module.exports = makeRobotAccountant;
