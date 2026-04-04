import { describe, expect, it } from 'vitest';
import { convertRange } from '../src/index';

describe('convertRange', (): void => {
	it('should convert values from one range to another', (): void => {
		expect(convertRange(parseInt('ff', 16), 0, 255, 0, 1)).toBe(1);
		expect(convertRange(parseInt('00', 16), 0, 255, 0, 1)).toBe(0);
	});
});