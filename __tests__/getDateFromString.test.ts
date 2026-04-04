import { describe, expect, it } from 'vitest';
import { getDateFromString } from '../src/index';

describe('getDateFromString', (): void => {
	it('should create a Date object from a valid date string', (): void => {
		const d: Date | null = getDateFromString('01/01/2023');
		expect(d).not.toBeNull();
		expect(d?.getTime()).toBe(1672527600000);
	});
});