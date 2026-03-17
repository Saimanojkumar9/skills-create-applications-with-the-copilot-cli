/**
 * Node.js CLI Calculator Module
 * 
 * This calculator supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * And advanced operations:
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

class Calculator {
  /**
   * Addition operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtraction operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplication operation
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Division operation
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Quotient of a divided by b
   * @throws {Error} If divisor is zero
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }

  /**
   * Modulo operation
   * @param {number} a - First number (dividend)
   * @param {number} b - Second number (divisor)
   * @returns {number} Remainder of a divided by b
   * @throws {Error} If divisor is zero
   */
  modulo(a, b) {
    if (b === 0) {
      throw new Error('Cannot perform modulo with zero divisor');
    }
    return a % b;
  }

  /**
   * Exponentiation operation
   * @param {number} base - The base number
   * @param {number} exponent - The exponent (power)
   * @returns {number} Result of base raised to the exponent
   */
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  /**
   * Square root operation
   * @param {number} n - The number to find the square root of
   * @returns {number} The square root of n
   * @throws {Error} If n is negative
   */
  squareRoot(n) {
    if (n < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(n);
  }
}

module.exports = Calculator;
