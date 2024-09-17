'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const f = function(a) {
    return (b) => {
      counter++;

      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return f;
}

module.exports = makeRobotAccountant;
