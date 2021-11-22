'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const add = (a) => {
    count++;

    return (b) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return a + b;
      }
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
