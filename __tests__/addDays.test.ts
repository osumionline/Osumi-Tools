import { addDays } from '../src/index';

test('addDays', (): void => {
	expect(addDays(new Date(2023, 0, 1, 0, 0, 0, 0), 2).getTime()).toBe(
		1672700400000
	);
});
