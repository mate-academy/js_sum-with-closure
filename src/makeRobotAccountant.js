'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = function(a) {
    count++;

    if ((count <= 3) || (count % 2 !== 0)) {
      return (b) => a + b;
    }

    return () => 'Bzzz... Error!';
  };

  return sum;
}

module.exports = makeRobotAccountant;
