const reverseString = require('./reverseString');


test ('should reverse the string', () => {
    expect(reverseString('bawa')).toBe('awab')
});

test ('should reverse the string', () => {
    expect(reverseString('collins')).toBe('snilloc')
});

test ('should reverse the string', () => {
    expect(reverseString('captain')).toBe('niatpac')
});