import { describe, expect, it } from 'vitest';
import { getRandomNumber } from '../src/index';

describe('getRandomNumber', (): void => {
	it('should return a number in the specified range', (): void => {
		const min: number = 1;
		const max: number = 1000;
		const result: number = getRandomNumber(min, max);

		expect(result).toBeGreaterThanOrEqual(min);
		expect(result).toBeLessThanOrEqual(max);
	});

	it('should return an integer number', (): void => {
		const result: number = getRandomNumber(1, 1000);

		expect(Number.isInteger(result)).toBe(true);
	});
});