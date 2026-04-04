import { describe, expect, it } from 'vitest';
import { urlencode } from '../src/index';

describe('urlencode', (): void => {
	it('should encode a string for use in URLs', (): void => {
		expect(urlencode('test osumi urlencode')).toBe('test+osumi+urlencode');
	});
});