import { describe, expect, it } from 'vitest';
import { startOfDay } from '../src/index';

describe('startOfDay', (): void => {
	it('should set a date to the start of the day', (): void => {
		expect(startOfDay(new Date(2023, 0, 1, 0, 0, 0, 0)).getTime()).toBe(
			1672527600000
		);
	});
});