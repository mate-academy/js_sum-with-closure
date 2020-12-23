'use strict';

/**
 * Reproduces some intricate behaviour of Mate robots.
 * @return {function} function that adds two numbers.
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return function(a) {
    return function(b) {
      callsCounter++;

      if (callsCounter > 3 && callsCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
