import { describe, expect, it } from 'vitest';
import { stringEquals } from '../src/index';

describe('stringEquals', (): void => {
	it('should return true for identical strings', (): void => {
		expect(stringEquals('hello', 'hello')).toBe(true);
	});

	it('should return true for strings that differ only in case', (): void => {
		expect(stringEquals('Hello', 'hello')).toBe(true);
	});

	it('should return true for strings that differ only in whitespace', (): void => {
		expect(stringEquals('  hello  ', 'hello')).toBe(true);
	});

	it('should return true for strings that differ only in diacritics', (): void => {
		expect(stringEquals('Árbol', 'arbol')).toBe(true);
	});

	it('should return false for completely different strings', (): void => {
		expect(stringEquals('hello', 'world')).toBe(false);
	});

	it('should return false if one string is undefined', (): void => {
		expect(stringEquals(undefined, 'hello')).toBe(false);
	});

	it('should return true if both strings are undefined', (): void => {
		expect(stringEquals(undefined, undefined)).toBe(true);
	});
});