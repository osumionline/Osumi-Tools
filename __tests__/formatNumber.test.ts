import { describe, expect, it } from 'vitest';
import { formatNumber } from '../src/index';

describe('formatNumber', (): void => {
	it('should format a number with the default number of decimals', (): void => {
		expect(formatNumber(15.267)).toBe('15,27');
	});
});