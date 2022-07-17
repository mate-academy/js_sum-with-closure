'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (a) => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (b) => a + b;
  };
}

// const getSum = makeRobotAccountant();

// console.log(getSum);

module.exports = makeRobotAccountant;
