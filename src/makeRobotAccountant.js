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
  let numbers = [];

  function count(number) {
    numbers = [number, ...numbers];

    if (numbers.length === 2) {
      whichCall++;

      const sum = numbers[0] + numbers[1];

      numbers.length = 0;

      return whichCall % 2 === 0 && whichCall > 2 ? 'Bzzz... Error!' : sum;
    };

    return count;
  };

  return count;
}

module.exports = makeRobotAccountant;
