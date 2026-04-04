import { describe, expect, it } from 'vitest';
import { hexToRgbFloat } from '../src/index';

describe('hexToRgbFloat', (): void => {
	it('should convert a hex color to RGB float values', (): void => {
		expect(JSON.stringify(hexToRgbFloat('#ff0000'))).toBe(
			'{"r":1,"g":0,"b":0}'
		);
	});
});