'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => { // getSum(5)
    count++;

    return (b) => { // ( getSum(5) )(6)
      if (count <= 3 || count % 2) { // first three and odd works
        return a + b;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
