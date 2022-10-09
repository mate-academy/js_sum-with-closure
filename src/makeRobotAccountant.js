'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberStarts = 0;

  return (x) => {
    return (y) => {
      const result = Number(x + y);

      numberStarts++;

      if (numberStarts === 4) {
        return 'Bzzz... Error!';
      };

      if (numberStarts > 4) {
        return result % 2 === 0 ? result : 'Bzzz... Error!';
      };

      return result;
    };
  };
};

module.exports = makeRobotAccountant;
