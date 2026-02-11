import { endOfDay } from '../src/index';

test('endOfDay', (): void => {
	expect(endOfDay(new Date(2023, 0, 1, 0, 0, 0, 0)).getTime()).toBe(
		1672613999999
	);
});
