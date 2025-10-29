/**
 * Calculator Module
 *
 * Provides basic arithmetic operations
 */

/**
 * Add two numbers
 * @param a - First number
 * @param b - Second number
 * @returns Sum of a and b
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtract b from a
 * @param a - First number
 * @param b - Second number
 * @returns Difference of a and b
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiply two numbers
 * @param a - First number
 * @param b - Second number
 * @returns Product of a and b
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Divide a by b
 * @param a - Numerator
 * @param b - Denominator
 * @returns Quotient of a and b
 * @throws Error if b is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Calculator class with chainable operations
 */
export class Calculator {
  private value: number = 0;

  /**
   * Set the initial value
   * @param val - Initial value
   */
  constructor(val: number = 0) {
    this.value = val;
  }

  /**
   * Add to current value
   * @param val - Value to add
   * @returns This calculator instance for chaining
   */
  add(val: number): Calculator {
    this.value += val;
    return this;
  }

  /**
   * Subtract from current value
   * @param val - Value to subtract
   * @returns This calculator instance for chaining
   */
  subtract(val: number): Calculator {
    this.value -= val;
    return this;
  }

  /**
   * Multiply current value
   * @param val - Value to multiply by
   * @returns This calculator instance for chaining
   */
  multiply(val: number): Calculator {
    this.value *= val;
    return this;
  }

  /**
   * Divide current value
   * @param val - Value to divide by
   * @returns This calculator instance for chaining
   * @throws Error if val is zero
   */
  divide(val: number): Calculator {
    if (val === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.value /= val;
    return this;
  }

  /**
   * Get the current value
   * @returns Current calculator value
   */
  getValue(): number {
    return this.value;
  }

  /**
   * Reset calculator to zero
   * @returns This calculator instance for chaining
   */
  reset(): Calculator {
    this.value = 0;
    return this;
  }
}
