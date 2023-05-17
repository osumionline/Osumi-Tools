import { convertRange } from '../src/index';

test('convertRange', (): void => {
	expect(convertRange(parseInt('ff', 16), 0, 255, 0, 1)).toBe(1);
	expect(convertRange(parseInt('00', 16), 0, 255, 0, 1)).toBe(0);
});
