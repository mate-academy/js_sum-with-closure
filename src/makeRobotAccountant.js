'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => { // getSum(5)
    count++;

    return (b) => { // ( getSum(5) )(6)
      if (count <= 3) { // first three works everytime
        return a + b;
      } else if (count % 2) { // odd (НЕпарні) works correct
        return a + b;
      } else { // >3 and even works not correct
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
