import { describe, expect, it } from 'vitest';
import { toNumber } from '../src/index';

describe('toNumber', (): void => {
	it('should convert a formatted string to a number', (): void => {
		expect(toNumber('15,267')).toBe(15.267);
	});
});