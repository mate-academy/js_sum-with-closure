'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;
  const calculateOuter = (x) => {
    const calculate = (y) => {
      const result = x + y;

      call++;

      if (call > 3 && call % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };

    return calculate;
  };

  return calculateOuter;
}

module.exports = makeRobotAccountant;
