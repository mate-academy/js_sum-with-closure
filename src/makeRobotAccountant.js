'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const adder = (a) => {
    count++;

    if (count > 3) {
      if (count % 2 === 0) {
        return (b) => 'Bzzz... Error!';
      } else {
        return (b) => a + b;
      }
    } else {
      return (b) => a + b;
    }
  };

  return adder;
}

module.exports = makeRobotAccountant;
