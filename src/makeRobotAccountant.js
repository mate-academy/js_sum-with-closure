'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let x = 0;
  let callsCout = 1;

  return n => {
    x = n;

    return y => {
      if (callsCout <= 3) {
        callsCout++;

        return x + y;
      } else if (callsCout % 2 === 0) {
        callsCout++;

        return 'Bzzz... Error!';
      } else {
        callsCout++;

        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
