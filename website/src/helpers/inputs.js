/* 
  This file is for functions on strings that will be used many times throughout this application.
*/

// String.prototype.isNullOrWhiteSpace = function() { return (!this || this.length === 0 || /^\s*$/.test(this)) }
export function isNullOrEmptyOrWhitespace(someString = '') {
  return (!someString || someString.length === 0 || someString.indexOf(' ') >= 0)
}

export function isNullOrNaNOrLessThanOrEqualToZero(someNumber = 0) {
  return (!someNumber || Number.isNaN(someNumber) || someNumber <= 0)
}