'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let invokedTimes = 0;

  const add = (x) => {
    invokedTimes++;

    if (invokedTimes < 3 || invokedTimes % 2 !== 0) {
      return (y) => {
        return x + y;
      };
    }

    return () => 'Bzzz... Error!';
  };

  return add;
}

module.exports = makeRobotAccountant;
