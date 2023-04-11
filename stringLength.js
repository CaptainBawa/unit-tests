function stringLength(string) {
    const stringArray = string.split("");
    if (stringArray.length > 0 && stringArray.length <= 10){
        return stringArray.reduce((pre, cur) => pre + cur.length, 0);
      } else {
        return 'string must contain at least 1 character or less than 10 characters';
      }
  }
  module.exports = stringLength;