'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 3;
  let anotherCounter = 1;

  return function one(x) {
    return function two(y) {
      switch (true) {
        case (counter > 0) :
          counter--;

          return x + y;
        case (counter === 0 && anotherCounter === 1) :
          anotherCounter--;

          return 'Bzzz... Error!';
        case (counter === 0 && anotherCounter === 0) :
          anotherCounter++;

          return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
