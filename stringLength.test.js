const stringLength = require('./stringLength');

test('should return string length', () => {
  
  expect(stringLength('bawa')).toBe(4);
  
});

test('should return string length', () => {
  
  expect (() => {
    stringLength('');
  }).toThrow('string must contain at least 1 character');
  
});

test('should return string length', () => {
  
  expect (() => {
    stringLength('My string is too long to pass this test');
  }).toThrow('string must not exceed 10 characters');
  
});