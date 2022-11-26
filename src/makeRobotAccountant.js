'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const phrase = 'Bzzz... Error!';

  return (a) => {
    return (b) => {
      count++;

      return (
        count > 3 && count % 2 === 0
          ? phrase
          : (a + b)
      );
    };
  };
}

module.exports = makeRobotAccountant;
