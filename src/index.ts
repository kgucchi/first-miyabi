/**
 * First Miyabi Project
 * Autonomous development powered by Agentic OS
 */

import { add, subtract, multiply, divide, Calculator } from './calculator';

console.log('Hello from Miyabi Agentic OS!');
console.log('');

export function main() {
  console.log('=== Calculator Demo ===');
  console.log('');

  // Basic functions
  console.log('Basic Functions:');
  console.log(`2 + 3 = ${add(2, 3)}`);
  console.log(`10 - 4 = ${subtract(10, 4)}`);
  console.log(`5 * 6 = ${multiply(5, 6)}`);
  console.log(`20 / 4 = ${divide(20, 4)}`);
  console.log('');

  // Calculator class with method chaining
  console.log('Calculator Class (Method Chaining):');
  const calc = new Calculator(10);
  const result = calc
    .add(5)      // 10 + 5 = 15
    .subtract(3) // 15 - 3 = 12
    .multiply(2) // 12 * 2 = 24
    .divide(4)   // 24 / 4 = 6
    .getValue();

  console.log(`(10 + 5 - 3) * 2 / 4 = ${result}`);
  console.log('');

  console.log('First Miyabi is running... ✅');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
