'use strict';

/**
 *
 * @return {function}
 *
 * const getSum = makeRobotAccountant();
getSum(5)(6) === 11;
getSum(1)(3) === 4;
getSum(6)(6) === 12;
getSum(55)(16) === 'Bzzz... Error!';
getSum(55)(16) === 71;
getSum(55)(17) === 'Bzzz... Error!';
getSum(5)(17) === 22;
getSum(1)(1) === 'Bzzz... Error!';
 *
 *
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (x) => {
    counter++;

    return (y) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
