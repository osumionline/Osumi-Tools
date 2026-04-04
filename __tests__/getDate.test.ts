import { describe, expect, it } from 'vitest';
import { getDate } from '../src/index';

describe('getDate', (): void => {
	it('should format a date using the provided pattern', (): void => {
		expect(
			getDate({
				date: new Date(2023, 0, 18, 0, 0, 0, 0),
				pattern: 'dmy'
			})
		).toBe('18/01/2023');
	});
});