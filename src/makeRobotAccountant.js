'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  const history = [];

  return (a) => {
    return (b) => {
      sum = a + b;
      history.push(sum);

      if (history.length > 3 && history.length % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
