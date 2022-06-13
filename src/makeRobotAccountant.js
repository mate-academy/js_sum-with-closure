'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (a) => {
    const innerFunction = function(b) {
      counter++;

      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return innerFunction;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
