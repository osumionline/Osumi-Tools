import { formatNumber } from '../src/index';

test('formatNumber', (): void => {
	expect(formatNumber(15.267)).toBe('15,27');
});
