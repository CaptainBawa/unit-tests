const capitalize = require('./capitalize');

test ('should return first character capitalized', () => {
    expect(capitalize('bawa')).toBe('Bawa');
});

test ('should return first character capitalized', () => {
    expect(capitalize('collins')).toBe('Collins');
});

test ('should return first character capitalized', () => {
    expect(capitalize('captain')).toBe('Captain');
});