'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  // 1.save first number from param into local array
  // 2.save second number from param into local array
  // 3. if length of this array equals 2 then
  let whichCall = 0;

  return function(firstNumber) {
    return function(secondNumber) {
      whichCall++;

      const sum = firstNumber + secondNumber;

      return whichCall % 2 === 0 && whichCall > 2 ? 'Bzzz... Error!' : sum;
    };
  };
}

module.exports = makeRobotAccountant;
