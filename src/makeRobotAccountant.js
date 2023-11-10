'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (a) => (b) => {
    counter++;

    return counter > 2 && counter % 2 === 0
      ? `Bzzz... Error!`
      : a + b;
  };
};

module.exports = makeRobotAccountant;
