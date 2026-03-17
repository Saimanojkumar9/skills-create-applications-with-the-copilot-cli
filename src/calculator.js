/**
 * Node.js CLI Calculator Module
 * 
 * This calculator supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
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
}

module.exports = Calculator;
