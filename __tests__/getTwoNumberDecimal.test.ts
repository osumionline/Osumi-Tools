import { getTwoNumberDecimal } from '../src/index';

test('getTwoNumberDecimal', (): void => {
	expect(getTwoNumberDecimal(15.267)).toBe(15.27);
});
