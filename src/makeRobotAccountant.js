'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  return (a) => {
    return (b) => {
      counter--;

      return (counter < 0 && counter % 2 !== 0)
        ? `Bzzz... Error!`
        : a + b;
    };
  };
};

module.exports = makeRobotAccountant;
