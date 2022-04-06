'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robot = (counter1) => {
    count++;

    return (counter2) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return counter1 + counter2;
      }
    };
  };

  return robot;
}

module.exports = makeRobotAccountant;
