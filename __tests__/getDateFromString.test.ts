import { getDateFromString } from '../src/index';

test('getDateFromString', (): void => {
	const d: Date | null = getDateFromString('01/01/2023');
	expect(d != null && d.getTime()).toBe(1672527600000);
});
