'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const func1 = (x) => {
    count++;

    const func2 = (y) => {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return func2;
  };

  return func1;
}

module.exports = makeRobotAccountant;
