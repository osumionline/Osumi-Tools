import { validateEmail } from '../src/index';

test('validateEmail', (): void => {
	expect(validateEmail('prueba@ejemplo.com')).toBe(true);
	expect(validateEmail('prueba@ejemplo')).toBe(false);
});
