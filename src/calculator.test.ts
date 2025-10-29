/**
 * Calculator Module Tests
 */

import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide, Calculator } from './calculator';

describe('Calculator Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    it('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('should multiply negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    it('should multiply positive and negative numbers', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    it('should handle zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(6, 2)).toBe(3);
    });

    it('should divide negative numbers', () => {
      expect(divide(-6, -2)).toBe(3);
    });

    it('should divide positive and negative numbers', () => {
      expect(divide(6, -2)).toBe(-3);
    });

    it('should throw error on division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});

describe('Calculator Class', () => {
  it('should initialize with default value of 0', () => {
    const calc = new Calculator();
    expect(calc.getValue()).toBe(0);
  });

  it('should initialize with custom value', () => {
    const calc = new Calculator(10);
    expect(calc.getValue()).toBe(10);
  });

  it('should add values', () => {
    const calc = new Calculator(5);
    calc.add(3);
    expect(calc.getValue()).toBe(8);
  });

  it('should subtract values', () => {
    const calc = new Calculator(10);
    calc.subtract(4);
    expect(calc.getValue()).toBe(6);
  });

  it('should multiply values', () => {
    const calc = new Calculator(5);
    calc.multiply(3);
    expect(calc.getValue()).toBe(15);
  });

  it('should divide values', () => {
    const calc = new Calculator(10);
    calc.divide(2);
    expect(calc.getValue()).toBe(5);
  });

  it('should throw error on division by zero', () => {
    const calc = new Calculator(10);
    expect(() => calc.divide(0)).toThrow('Division by zero is not allowed');
  });

  it('should support method chaining', () => {
    const calc = new Calculator(10);
    const result = calc.add(5).subtract(3).multiply(2).divide(4).getValue();
    expect(result).toBe(6);
  });

  it('should reset to zero', () => {
    const calc = new Calculator(100);
    calc.reset();
    expect(calc.getValue()).toBe(0);
  });

  it('should support chaining after reset', () => {
    const calc = new Calculator(100);
    const result = calc.reset().add(5).multiply(2).getValue();
    expect(result).toBe(10);
  });
});
