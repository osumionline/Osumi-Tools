import { describe, expect, it } from 'vitest';
import { addDays } from '../src/index';

describe('addDays', (): void => {
	it('should add days to a date', (): void => {
		expect(addDays(new Date(2023, 0, 1, 0, 0, 0, 0), 2).getTime()).toBe(
			1672700400000
		);
	});
});