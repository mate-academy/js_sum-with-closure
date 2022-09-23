'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let answerCounter = 0;

  const numSumX = function(x) {
    const numSumY = function(y) {
      answerCounter++;

      const sum = x + y;

      if (answerCounter < 3 || answerCounter % 2 !== 0) {
        return sum;
      }

      return 'Bzzz... Error!';
    };

    return numSumY;
  };

  return numSumX;
}

module.exports = makeRobotAccountant;
