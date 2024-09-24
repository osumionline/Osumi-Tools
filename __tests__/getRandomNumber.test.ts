import { getRandomNumber } from '../src/index';

describe('getRandomNumber', () => {
	test('getRandomNumber - Should return a number on the specified range', (): void => {
		const min: number = 1;
		const max: number = 1000;
		const result: any = getRandomNumber(min, max);

		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
	});

	test('getRandomNumber - Should return a number without decimals, an integer', (): void => {
		const result: any = getRandomNumber(1, 1000);
		expect(Number.isInteger(result)).toBe(true);
	});
});
