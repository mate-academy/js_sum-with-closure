'use strict';

/**
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
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  return (x) => {
    return (y) => {
      count++;

      if (count % 2 === 0 && count > 3) {
        return errorMessage;
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
