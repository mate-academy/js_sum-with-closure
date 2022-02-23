'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  return num1 => num2 => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return 'Bzzz... Error!';
    } else {
      return num1 + num2;
    }
  };
}

module.exports = makeInfinityAdder;
