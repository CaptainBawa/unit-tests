function capitalize(string) {
    const [firstLetter, ...rest] = string;
    return `${firstLetter.toUpperCase()}${rest.join('')}`
  }

module.exports = capitalize