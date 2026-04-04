import { describe, expect, it } from 'vitest';
import { normalize } from '../src/index';

describe('normalize', (): void => {
	it('should convert string to lowercase', (): void => {
		expect(normalize('HELLO')).toBe('hello');
	});

	it('should remove diacritics (accents)', (): void => {
		expect(normalize('Árbol')).toBe('arbol');
		expect(normalize('Café')).toBe('cafe');
	});

	it('should trim whitespace', (): void => {
		expect(normalize('  hello  ')).toBe('hello');
	});

	it('should handle combined cases', (): void => {
		expect(normalize('  ÁRbol  ')).toBe('arbol');
		expect(normalize('  Café  ')).toBe('cafe');
	});

	it('should return an empty string if input is empty', (): void => {
		expect(normalize('')).toBe('');
	});
});