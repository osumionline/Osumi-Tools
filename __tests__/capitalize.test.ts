import { capitalize } from '../src/index';

test('capitalize', (): void => {
	expect(capitalize('hello')).toBe('Hello');
});
