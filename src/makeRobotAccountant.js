'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const func1 = (x) => {
    const func2 = (y) => {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return func2;
  };

  return func1;
}

module.exports = makeRobotAccountant;
