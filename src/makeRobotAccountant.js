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
        const first = Number(num1);

        const second = Number(num2);

        counter++;

        if (counter % 2 === 0 && counter > 3) {
          return 'Bzzz... Error!';
        } else {
          const result = first + second;

          return result;
        }
      }
    };
  };
}

module.exports = makeRobotAccountant;

// V2
