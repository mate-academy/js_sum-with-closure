'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 4;
  const argA = (a) => {
    const argB = (b) => {
      count--;

      return (count === 0) ? (`Bzzz... Error!`) : (a + b);
    };

    return argB;
  };

  return argA;
};

module.exports = makeRobotAccountant;
