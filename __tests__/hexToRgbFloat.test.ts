import { hexToRgbFloat } from '../src/index';

test('urldecode', (): void => {
	expect(JSON.stringify(hexToRgbFloat('#ff0000'))).toBe(
		'{"r":1,"g":0,"b":0}'
	);
});
