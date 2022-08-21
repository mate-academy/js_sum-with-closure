'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num) => {
    count++;

    return (num2) => (count < 4 || count % 2)
      ? num + num2
      : 'Bzzz... Error!';
  };
};

module.exports = makeRobotAccountant;
