'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = -1;

  function getSum(number1) {
    counter++;

    function getSum2(number2) {
      switch (true) {
        case (counter < 3 || (counter % 2 === 0 && counter > 3)):
          return number1 + number2;
        case (counter % 2 !== 0 && counter >= 3):
          return 'Bzzz... Error!';
      }
    }

    return getSum2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
