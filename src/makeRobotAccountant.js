'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (value) => {
    counter++;

    return (b) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return value + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
