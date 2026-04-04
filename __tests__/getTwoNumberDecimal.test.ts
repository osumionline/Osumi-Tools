import { describe, expect, it } from 'vitest';
import { getTwoNumberDecimal } from '../src/index';

describe('getTwoNumberDecimal', (): void => {
	it('should round a number to two decimals', (): void => {
		expect(getTwoNumberDecimal(15.267)).toBe(15.27);
	});
});