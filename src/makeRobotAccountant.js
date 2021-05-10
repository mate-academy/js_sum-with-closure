'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num1) => {
    count++;

    return (num2) => (count < 4 || count % 2 !== 0)
      ? num1 + num2
      : 'Bzzz... Error!';
  };
};

module.exports = makeRobotAccountant;
