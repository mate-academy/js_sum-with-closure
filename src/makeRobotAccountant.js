'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    count++;

    return (b) => {
      if (count < 3 || count % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;

// Створіть функцію makeRobotAccountant,
// результатом якої є функція, яка працює за шаблоном
// getSum (4) (5) === 9.
// Перші 3 виклики цієї функції працюють добре.
// Потім всі парні виклики повертають рядок Bzzz... Error!,
// а непарні виклики повертають правильне значення.
