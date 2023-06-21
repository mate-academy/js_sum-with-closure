'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function curry(curriedFunction) {
    return function(function1) {
      return function(function2) {
        return curriedFunction(function1, function2);
      };
    };
  }

  function getSum(num1, num2) {
    count++;

    if (count < 4 || count % 2 === 1) {
      return num1 + num2;
    }

    return 'Bzzz... Error!';
  }

  return curry(getSum);
}

module.exports = makeRobotAccountant;
