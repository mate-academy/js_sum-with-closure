'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstClosure) => {
    count++;

    return (secondClosure) => {
      return count > 3 && count % 2 === 0
        ? 'Bzzz... Error!'
        : firstClosure + secondClosure;
    };
  };
}

module.exports = makeRobotAccountant;
