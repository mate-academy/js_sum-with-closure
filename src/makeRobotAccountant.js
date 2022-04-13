'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (value0) => {
    return function(value1) {
      const out = (counter < 3)
        ? (value0 + value1)
        : (counter > 3 && counter % 2 === 0)
          ? value0 + value1 : 'Bzzz... Error!';

      counter++;

      return out;
    };
  };
}

module.exports = makeRobotAccountant;
