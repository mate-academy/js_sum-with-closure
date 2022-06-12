'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  const sumValues = (a) => {
    counter++;

    return (b) => {
      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return a + b;
    };
  };

  return sumValues;
}

module.exports = makeRobotAccountant;
