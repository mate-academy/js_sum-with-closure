'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(y) {
    function add(x) {
      if (counter > 3 && counter % 2 === 0) {
        return ('Bzzz... Error!');
      }

      return x + y;
    };

    counter++;

    return add;
  };
}

module.exports = makeRobotAccountant;
