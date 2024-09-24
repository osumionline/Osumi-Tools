import { bytesToSize } from '../src/index';

test('formatNumber', (): void => {
	expect(bytesToSize(1024)).toBe('1.0 KB');
});
