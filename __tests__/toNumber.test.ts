import { toNumber } from '../src/index';

test('toNumber', (): void => {
	expect(toNumber('15,267')).toBe(15.267);
});
