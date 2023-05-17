import { urlencode } from '../src/index';

test('urlencode', (): void => {
	expect(urlencode('test osumi urlencode')).toBe('test+osumi+urlencode');
});
