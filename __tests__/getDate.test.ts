import { getDate } from '../src/index';

test('getDate', (): void => {
	expect(getDate(new Date(2023, 0, 1, 0, 0, 0, 0))).toBe('01/01/2023');
});
