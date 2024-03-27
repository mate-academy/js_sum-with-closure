'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;
  let isOdd = '';
  const error = 'Bzzz... Error!';

  function getSum(a) {
    return function(b) {
      if (counter > 0) {
        counter--;

        return a + b;
      } else {
        if (isOdd === '' || isOdd === 'yes') {
          isOdd = 'no';

          return error;
        } else {
          isOdd = 'no';

          return a + b;
        }
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
