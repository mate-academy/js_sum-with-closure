'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let sum = 0;

  const summarize = (a) => (b) => {
    counter++;

    if (counter < 4) {
      sum = a + b;
    } else {
      if (counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        sum = a + b;
      }
    }

    return sum;
  };

  return summarize;
}

module.exports = makeRobotAccountant;
