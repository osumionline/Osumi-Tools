import { describe, expect, it } from 'vitest';
import { endOfDay } from '../src/index';

describe('endOfDay', (): void => {
	it('should set a date to the end of the day', (): void => {
		expect(endOfDay(new Date(2023, 0, 1, 0, 0, 0, 0)).getTime()).toBe(
			1672613999999
		);
	});
});