/**
 * Comprehensive Unit Tests for Calculator Module
 * 
 * Tests all four basic arithmetic operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division (including edge cases like division by zero)
 */

const Calculator = require('../calculator');

describe('Calculator Module', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  // ============ ADDITION TESTS ============
  describe('Addition', () => {
    test('should add two positive numbers: 2 + 3 = 5', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers: -5 + -3 = -8', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers: 10 + -4 = 6', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number: 7 + 0 = 7', () => {
      expect(calculator.add(7, 0)).toBe(7);
    });

    test('should add two zeros: 0 + 0 = 0', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers: 1.5 + 2.5 = 4', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
    });

    test('should add large numbers: 1000000 + 2000000 = 3000000', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ============ SUBTRACTION TESTS ============
  describe('Subtraction', () => {
    test('should subtract two positive numbers: 10 - 4 = 6', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract resulting in negative: 3 - 8 = -5', () => {
      expect(calculator.subtract(3, 8)).toBe(-5);
    });

    test('should subtract negative numbers: 5 - (-3) = 8', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should subtract from zero: 0 - 5 = -5', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract zero: 10 - 0 = 10', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract same numbers: 7 - 7 = 0', () => {
      expect(calculator.subtract(7, 7)).toBe(0);
    });

    test('should subtract decimal numbers: 10.5 - 3.2 = 7.3', () => {
      expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });
  });

  // ============ MULTIPLICATION TESTS ============
  describe('Multiplication', () => {
    test('should multiply two positive numbers: 45 * 2 = 90', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply positive by negative: 6 * -3 = -18', () => {
      expect(calculator.multiply(6, -3)).toBe(-18);
    });

    test('should multiply two negative numbers: -4 * -5 = 20', () => {
      expect(calculator.multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero: 10 * 0 = 0', () => {
      expect(calculator.multiply(10, 0)).toBe(0);
    });

    test('should multiply by one: 42 * 1 = 42', () => {
      expect(calculator.multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers: 1000 * 2000 = 2000000', () => {
      expect(calculator.multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply fractional numbers: 0.5 * 0.5 = 0.25', () => {
      expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
    });
  });

  // ============ DIVISION TESTS ============
  describe('Division', () => {
    test('should divide two positive numbers: 20 / 5 = 4', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative: 15 / -3 = -5', () => {
      expect(calculator.divide(15, -3)).toBe(-5);
    });

    test('should divide two negative numbers: -20 / -4 = 5', () => {
      expect(calculator.divide(-20, -4)).toBe(5);
    });

    test('should divide resulting in decimal: 7 / 2 = 3.5', () => {
      expect(calculator.divide(7, 2)).toBe(3.5);
    });

    test('should divide zero by number: 0 / 5 = 0', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide number by one: 42 / 1 = 42', () => {
      expect(calculator.divide(42, 1)).toBe(42);
    });

    test('should divide decimal numbers: 10.5 / 2.5 = 4.2', () => {
      expect(calculator.divide(10.5, 2.5)).toBeCloseTo(4.2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => {
        calculator.divide(-10, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Cannot divide by zero');
    });
  });

  // ============ INTEGRATION TESTS ============
  describe('Integration Tests - Chained Operations', () => {
    test('should perform multiple operations: (2 + 3) * 4 = 20', () => {
      const step1 = calculator.add(2, 3);
      const result = calculator.multiply(step1, 4);
      expect(result).toBe(20);
    });

    test('should perform multiple operations: (45 * 2) / 10 = 9', () => {
      const step1 = calculator.multiply(45, 2);
      const result = calculator.divide(step1, 10);
      expect(result).toBe(9);
    });

    test('should perform multiple operations: 20 / 5 + 10 - 4 = 10', () => {
      const step1 = calculator.divide(20, 5);
      const step2 = calculator.add(step1, 10);
      const result = calculator.subtract(step2, 4);
      expect(result).toBe(10);
    });
  });

  // ============ EDGE CASES & SPECIAL VALUES ============
  describe('Edge Cases and Special Values', () => {
    test('should handle very small numbers', () => {
      expect(calculator.add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle negative zero', () => {
      expect(calculator.add(-0, 5)).toBe(5);
    });

    test('should handle operations with negative numbers', () => {
      const result = calculator.multiply(-1, 50);
      expect(result).toBe(-50);
    });

    test('should return correct type (number)', () => {
      const result = calculator.add(5, 5);
      expect(typeof result).toBe('number');
    });
  });
});
