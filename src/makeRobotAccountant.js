'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  const getSum = function(num1) {
    calls++;

    if (calls <= 3 || calls % 2 !== 0) {
      return (num2) => {
        return num1 + num2;
      };
    } else {
      return () => {
        return 'Bzzz... Error!';
      };
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
