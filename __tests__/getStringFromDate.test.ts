import { describe, expect, it } from 'vitest';
import { getStringFromDate } from '../src/index';

describe('getStringFromDate', (): void => {
	it('should format a Date object as a string with hours', (): void => {
		expect(getStringFromDate(new Date(2024, 8, 24, 10, 42, 0), true)).toBe(
			'2024-09-24 10:42:00'
		);
	});
});