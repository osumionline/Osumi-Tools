import { urldecode } from '../src/index';

test('urldecode', (): void => {
	expect(urldecode('test+osumi+urlencode')).toBe('test osumi urlencode');
});
