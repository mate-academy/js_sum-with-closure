'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(digit) {
  let count = 0;
  const firstThreeCalls = 3;

  return (firstClosure) => {
    count++;

    return (secondClosure) => {
      if (count > firstThreeCalls && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstClosure + secondClosure;
    };
  };
}

module.exports = makeRobotAccountant;
