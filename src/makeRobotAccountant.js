'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let result;

  const accounter = function(x) {
    return function(y) {
      counter++;
      result = x + y;

      if ((counter > 3) && (counter % 2 === 0)) {
        result = 'Bzzz... Error!';
      }

      return result;
    };
  };

  return accounter;
}

// const getSum = makeRobotAccountant();

// getSum(5)(6);
// getSum(5)(6);
// getSum(5)(6);
// getSum(5)(6);
// getSum(5)(6);
// getSum(5)(6);

module.exports = makeRobotAccountant;
