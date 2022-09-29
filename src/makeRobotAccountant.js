'use strict';

/**
 *
 * @return {function}
 */

 function makeRobotAccountant() {
  let counter = 0;

  function fn(x) {
    counter++;

    function fn2(y) {
      if (counter % 2 || counter <= 3) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    }

    return fn2;
  };

  return fn;
}

module.exports = makeRobotAccountant;
