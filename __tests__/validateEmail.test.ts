import { validateEmail } from '../src/index';

test('validateEmail', (): void => {
	expect(validateEmail('test@example.com')).toBe(true);
	expect(validateEmail('test@example')).toBe(false);
});
