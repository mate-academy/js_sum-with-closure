'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a) => {
    counter++;

    return (b) => {
      if (counter > 3 && !(counter % 2)) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };
}

module.exports = makeRobotAccountant;

// const getSum = makeRobotAccountant();

// console.log(getSum(3)(5));
// console.log(getSum(3)(5));
// console.log(getSum(3)(5));
// console.log(getSum(3)(5));
// console.log(getSum(3)(5));
// console.log(getSum(3)(5));
// console.log(getSum(4)(3));
// console.log(getSum(4)(3));
// console.log(getSum(4)(3));
// console.log(getSum(4)(3));
