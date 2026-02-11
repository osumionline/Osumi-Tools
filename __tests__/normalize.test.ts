import { normalize } from '../src/index';

describe('normalize', () => {
	test('should convert string to lowercase', (): void => {
		expect(normalize('HELLO')).toBe('hello');
	});

	test('should remove diacritics (accents)', (): void => {
		expect(normalize('Árbol')).toBe('arbol');
		expect(normalize('Café')).toBe('cafe');
	});

	test('should trim whitespace', (): void => {
		expect(normalize('  hello  ')).toBe('hello');
	});

	test('should handle combined cases', (): void => {
		expect(normalize('  ÁRbol  ')).toBe('arbol');
		expect(normalize('  Café  ')).toBe('cafe');
	});

	test('should return an empty string if input is empty', (): void => {
		expect(normalize('')).toBe('');
	});
});
