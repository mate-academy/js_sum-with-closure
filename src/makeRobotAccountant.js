'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(nums) {
    count++;

    return function calculate(nums2) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return nums + nums2;
    };
  };
}

module.exports = makeRobotAccountant;
