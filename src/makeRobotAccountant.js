'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfMistakes = 0;

  return function getSum(a) {
    numberOfMistakes++;

    return (b) => {
      if (numberOfMistakes > 3 && numberOfMistakes % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;
