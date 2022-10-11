'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (value) => {
    counter++;

    const result = value;

    return function(secondValue) {
      if (counter <= 3 || counter % 2 !== 0) {
        return result + secondValue;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
