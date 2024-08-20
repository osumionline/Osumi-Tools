import { getDate } from '../src/index';

test('getDate', (): void => {
	//expect(getDate(new Date(2023, 0, 1, 0, 0, 0, 0))).toBe('01/01/2023');
	expect(getDate({
		date: new Date(2023, 0, 18, 0, 0, 0, 0),
		pattern: 'dmy'
	})).toBe('18/01/2023');
});
