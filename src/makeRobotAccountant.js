'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let score = 0;

  return (x) => (y) => {
    score++;

    if (score > 3 && score % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return x + y;
  };
}

module.exports = makeRobotAccountant;
