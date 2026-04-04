import { describe, expect, it } from 'vitest';
import { validateEmail } from '../src/index';

describe('validateEmail', (): void => {
	it('should validate email addresses correctly', (): void => {
		expect(validateEmail('test@example.com')).toBe(true);
		expect(validateEmail('test@example')).toBe(false);
	});
});