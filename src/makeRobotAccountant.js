'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function getSum(param) {
    const sum = param;

    return function Sum(parametr) {
      if (counter >= 3 && counter % 2 === 1) {
        counter++;

        return 'Bzzz... Error!';
      }
      counter++;

      return sum + parametr;
    };
  };
}

module.exports = makeRobotAccountant;
