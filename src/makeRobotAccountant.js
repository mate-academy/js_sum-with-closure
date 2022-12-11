'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (b) => (a) => {
    counter++;

    const returnValue = counter < 3 || counter % 2 !== 0
      ? a + b
      : 'Bzzz... Error!';

    return returnValue;
  };
};

module.exports = makeRobotAccountant;
