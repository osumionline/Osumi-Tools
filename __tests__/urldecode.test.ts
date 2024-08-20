import { urldecode } from '../src/index';

test('urldecode', (): void => {
	expect(urldecode('test+osumi+urldecode')).toBe('test osumi urldecode');
});
