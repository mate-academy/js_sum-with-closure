'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const error = () => {
    return 'Bzzz... Error!';
  };

  const getSum = (x) => {
    counter++;

    if (counter >= 4 && counter % 2 === 0) {
      return error;
    }

    const add = (y) => {
      return x + y;
    };

    return add;
  };

  return getSum;
};

module.exports = makeRobotAccountant;
