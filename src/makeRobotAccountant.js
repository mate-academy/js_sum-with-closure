'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(x) {
    function sumClosure(y) {
      count++;

      if ((count > 3) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return x + y;
    }

    return sumClosure;
  }

  return sum;
}

module.exports = makeRobotAccountant;
