import { describe, expect, it } from 'vitest';
import { capitalize } from '../src/index';

describe('capitalize', (): void => {
	it('should capitalize the first letter of a string', (): void => {
		expect(capitalize('hello')).toBe('Hello');
	});
});