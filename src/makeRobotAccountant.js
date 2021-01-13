'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let call = 1;

  return (number1) => {
    return (number2) => {
      sum += number1 + number2;

      if (call <= 3) {
        const ans = sum;

        ++call;
        sum = 0;

        return ans;
      } else if (call % 2 === 1) {
        const ans = sum;

        ++call;
        sum = 0;

        return ans;
      } else {
        ++call;
        sum = 0;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
