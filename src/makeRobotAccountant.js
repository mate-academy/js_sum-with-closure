'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  const f = (x) => {
    const g = (y) => {
      callCount++;

      if (callCount % 4 === 0) {
        callCount = 0;

        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return g;
  };

  return f;
}

module.exports = makeRobotAccountant;
