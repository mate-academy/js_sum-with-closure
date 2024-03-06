'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(num1) {
    return function(num2) {
      {
        const first = num1;

        const second = num2;

        counter++;

        if (counter % 2 === 0 && counter > 3) {
          return 'Bzzz... Error!';
        }

        return first + second;
      }
    };
  };
}

module.exports = makeRobotAccountant;

// V2
