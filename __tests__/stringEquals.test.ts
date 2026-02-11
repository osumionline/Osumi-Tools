import { stringEquals } from '../src/index';

describe('stringEquals', (): void => {
	test('should return true for identical strings', (): void => {
		expect(stringEquals('hello', 'hello')).toBe(true);
	});

	test('should return true for strings that differ only in case', (): void => {
		expect(stringEquals('Hello', 'hello')).toBe(true);
	});

	test('should return true for strings that differ only in whitespace', (): void => {
		expect(stringEquals('  hello  ', 'hello')).toBe(true);
	});

	test('should return true for strings that differ only in diacritics', (): void => {
		expect(stringEquals('Árbol', 'arbol')).toBe(true);
	});

	test('should return false for completely different strings', (): void => {
		expect(stringEquals('hello', 'world')).toBe(false);
	});

	test('should return false if one string is undefined', (): void => {
		expect(stringEquals(undefined, 'hello')).toBe(false);
	});

	test('should return true if both strings are undefined', (): void => {
		expect(stringEquals(undefined, undefined)).toBe(true);
	});
});
