function stringLength(string) {
  if (string.length < 1) {
    throw new Error ('string must contain at least 1 character')
  } else if (string.length > 10) {
    throw new Error ('string must not exceed 10 characters')
  } else {
    return string.length
  }
  }
  module.exports = stringLength;