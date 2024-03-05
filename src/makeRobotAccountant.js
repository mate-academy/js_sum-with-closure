/**
 *
 * @return {function}
 */

"use strict";

function makeRobotAccountant(num1) {
  let counter = 0;

  function getSum(...nums) {
    const first = Number(nums[0]);

    const second = Number(nums[1]);

    counter++;

    if (counter % 2 === 0) {
      return "Bzzz... Error!";
    } else {
      const result = first + second;
      return result;
    }
  }

  return getSum;
}

module.exports = makeRobotAccountant;
