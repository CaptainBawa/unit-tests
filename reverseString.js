function reverseString(string){
    const stringArray = string.split('');
    return stringArray.reverse().join('');
}
module.exports = reverseString;