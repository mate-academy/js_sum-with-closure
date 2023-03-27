'use strict';

/**
 *
 * @return {function}
 * const getSum = makeRobotAccountant();
getSum(5)(6) === 11;
 */

function makeRobotAccountant() {
  let currentCall = 0;

  return (a) => {
    currentCall++;

    return (currentCall > 3 && currentCall % 2 !== 1)
      ? () => 'Bzzz... Error!'
      : b => a + b;
  };
}

module.exports = makeRobotAccountant;

// return (a) => {
//   currentCall++;

//   if (currentCall > 3 && currentCall % 2 !== 1) {
//     return () => 'Bzzz... Error!';
//   }

//   return b => a + b;
// };
