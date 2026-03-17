#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported basic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Supported advanced operations:
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (sqrt)
 * 
 * Usage: node cli.js <number1> <operation> <number2>
 *        node cli.js sqrt <number>
 * Example: node cli.js 10 + 5
 *          node cli.js sqrt 16
 */

const Calculator = require('./calculator');

const calculator = new Calculator();

function displayUsage() {
  console.log(`
╔════════════════════════════════════════════╗
║     Node.js CLI Calculator Application     ║
╚════════════════════════════════════════════╝

BASIC OPERATIONS:
  + (Addition)
  - (Subtraction)
  * or × (Multiplication)
  / or ÷ (Division)

ADVANCED OPERATIONS:
  % (Modulo - remainder)
  ^ (Exponentiation - power)
  sqrt (Square Root)

USAGE:
  Binary operations: node cli.js <number1> <operation> <number2>
  Unary operation:   node cli.js sqrt <number>

EXAMPLES:
  node cli.js 10 + 5        → 15
  node cli.js 20 - 8        → 12
  node cli.js 6 "*" 7       → 42
  node cli.js 100 / 4       → 25
  node cli.js 10 "%" 3      → 1
  node cli.js 2 "^" 8       → 256
  node cli.js sqrt 16       → 4
  `);
}

function performCalculation(num1, operation, num2) {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    console.error('❌ Error: Both inputs must be valid numbers');
    return;
  }

  try {
    let result;
    let displayOp = operation;

    switch (operation) {
      case '+':
        result = calculator.add(a, b);
        break;
      case '-':
        result = calculator.subtract(a, b);
        break;
      case '*':
      case '×':
        result = calculator.multiply(a, b);
        displayOp = '×';
        break;
      case '/':
      case '÷':
        result = calculator.divide(a, b);
        displayOp = '÷';
        break;
      case '%':
        result = calculator.modulo(a, b);
        break;
      case '^':
        result = calculator.power(a, b);
        break;
      default:
        console.error(`❌ Error: Unknown operation '${operation}'`);
        displayUsage();
        return;
    }

    console.log(`\n✓ ${a} ${displayOp} ${b} = ${result}\n`);
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

function performUnaryOperation(operation, num) {
  const n = parseFloat(num);

  if (isNaN(n)) {
    console.error('❌ Error: Input must be a valid number');
    return;
  }

  try {
    let result;
    let displayOp;

    switch (operation.toLowerCase()) {
      case 'sqrt':
        result = calculator.squareRoot(n);
        displayOp = '√';
        console.log(`\n✓ ${displayOp}${n} = ${result}\n`);
        break;
      default:
        console.error(`❌ Error: Unknown operation '${operation}'`);
        displayUsage();
        return;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  displayUsage();
} else if (args[0].toLowerCase() === 'sqrt' && args.length === 2) {
  performUnaryOperation(args[0], args[1]);
} else if (args.length === 3) {
  performCalculation(args[0], args[1], args[2]);
} else {
  console.error('❌ Error: Invalid number of arguments');
  displayUsage();
}
