#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Usage: node cli.js <number1> <operation> <number2>
 * Example: node cli.js 10 + 5
 */

const Calculator = require('./calculator');

const calculator = new Calculator();

function displayUsage() {
  console.log(`
╔════════════════════════════════════════════╗
║     Node.js CLI Calculator Application     ║
╚════════════════════════════════════════════╝

Supported Operations:
  + (Addition)
  - (Subtraction)
  * or × (Multiplication)
  / or ÷ (Division)

Usage: node cli.js <number1> <operation> <number2>

Examples:
  node cli.js 10 + 5      → 15
  node cli.js 20 - 8      → 12
  node cli.js 6 "*" 7     → 42
  node cli.js 100 / 4     → 25
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

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  displayUsage();
} else if (args.length === 3) {
  performCalculation(args[0], args[1], args[2]);
} else {
  console.error('❌ Error: Invalid number of arguments');
  displayUsage();
}
