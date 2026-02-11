import { startOfDay } from '../src/index';

test('startOfDay', (): void => {
	expect(startOfDay(new Date(2023, 0, 1, 0, 0, 0, 0)).getTime()).toBe(
		1672527600000
	);
});
