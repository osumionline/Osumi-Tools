import { describe, expect, it } from 'vitest';
import { bytesToSize } from '../src/index';

describe('bytesToSize', (): void => {
	it('should return a human readable size', (): void => {
		expect(bytesToSize(1024)).toBe('1.0 KB');
	});
});