'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberFunctionCalls = 0;

  const getSum = (a) => {
    numberFunctionCalls++;

    return function(b) {
      if (numberFunctionCalls > 3 && numberFunctionCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
