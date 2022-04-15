'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (value0) => {
    return function(value1) {
      let out;

      if (counter < 3 || (counter > 3 && counter % 2 === 0)) {
        out = value0 + value1;
      } else {
        out = 'Bzzz... Error!';
      }
      counter++;

      return out;
    };
  };
}

module.exports = makeRobotAccountant;
