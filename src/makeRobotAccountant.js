'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  // random comment cuz i forgot to switch branch and need to make changes :P
  let counter = 0;

  function getSum(a) {
    function bullshitNesting(b) {
      if (counter > 2 && counter % 2 === 1) {
        counter++;

        return `Bzzz... Error!`;
      } else {
        counter++;

        return a + b;
      }
    }

    return bullshitNesting;
  }

  return getSum;
}

module.exports = makeRobotAccountant;
