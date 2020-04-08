'use strict';
/*eslint-disable*/

const sum = require('./sum');

test('add two numbers: 1 + 2 = 3', () => {
  expect(sum(1)(2))
    .toBe(3);
});

test('add two numbers: 1 + 11 = 12', () => {
  expect(sum(1)(11))
    .toBe(12);
});

test('add two numbers: one is negative 1 + -1 = 0', () => {
  expect(sum(1)(-1))
    .toBe(0);
});

test('add two numbers: both are negatives -1 + -1 = -2', () => {
  expect(sum(-1)(-1))
    .toBe(-2);
});

test('add two numbers: one is Infinity', () => {
  expect(sum(-1)(Infinity))
    .toBe(Infinity);
});

test('add two numbers: one is Infinity, another is -Infinity', () => {
  expect(isNaN(sum(Infinity)(-Infinity)))
    .toBe(true);
});
