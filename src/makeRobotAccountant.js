'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (x) => {
    counter++;

    return function(y) {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;

// Создайте функцию makeRobotAccountant,
// результатом которой будет функция,
// работающая по шаблону getSum (4) (5) === 9.
// Первые 3 вызова этой функции работают нормально.
// Тогда все четные вызовы возвращают строку Bzzz ... Error !,
// а нечетные вызовы правильное значение.
