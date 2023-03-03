'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const funcObj = function(x) {
    count++;

    return (y) => {
      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return funcObj;
}

module.exports = makeRobotAccountant;
