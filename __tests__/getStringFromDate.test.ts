import { getStringFromDate } from '../src/index';

test('formatNumber', (): void => {
	expect(getStringFromDate(new Date(2024, 8, 24, 10, 42, 0), true)).toBe(
		'2024-09-24 10:42:00'
	);
});
