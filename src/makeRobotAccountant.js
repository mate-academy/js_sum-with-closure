'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const result = (a) => {
    return (b) => {
      if (count <= 3 || count % 2 !== 0) {
        count++;

        return a + b;
      } else {
        count++;

        return 'Bzzz... Error!';
      }
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
