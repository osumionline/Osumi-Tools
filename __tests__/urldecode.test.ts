import { describe, expect, it } from 'vitest';
import { urldecode } from '../src/index';

describe('urldecode', (): void => {
	it('should decode a URL-encoded string', (): void => {
		expect(urldecode('test+osumi+urldecode')).toBe('test osumi urldecode');
	});
});