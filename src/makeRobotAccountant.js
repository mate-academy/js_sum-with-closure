'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const setFirstNumber = (x) => {
    const addSecondNumber = (y) => {
      callCount++;

      if (callCount > 3 && callCount % 2 === 0) {
        callCount = 0;

        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return addSecondNumber;
  };

  return setFirstNumber;
}

module.exports = makeRobotAccountant;
