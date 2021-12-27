'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function getSum(number1) {
    counter++;

    function sum(number2) {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number2;
    };

    return sum;
  };

  return getSum;
}
// return (number1) => {
//   return (number2) => {
//     counter++;

//     if (counter > 3 && counter % 2 === 0) {
//       return 'Bzzz... Error!';
//     }

//     return number1 + number2;
//   };
// };
module.exports = makeRobotAccountant;
