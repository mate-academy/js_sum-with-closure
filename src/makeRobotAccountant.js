'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const robotAccountant = (x) => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return () => `Bzzz... Error!`;
    } else {
      return (y) => x + y;
    }
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
