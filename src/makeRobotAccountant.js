'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const nums = [];

  const additor = function(num1) {
    const innerAdditor = function(num2) {
      const sum = num1 + num2;

      nums.push(sum);

      if (nums.length >= 4 && nums.length % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };

    return innerAdditor;
  };

  return additor;
}

module.exports = makeRobotAccountant;
