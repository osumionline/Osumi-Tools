import { rangesOverlap } from '../src/index';

describe('rangesOverlap', (): void => {
	test('should return true for overlapping ranges', (): void => {
		const range1: [Date, Date] = [
			new Date(2023, 0, 1),
			new Date(2023, 0, 10)
		];
		const range2: [Date, Date] = [
			new Date(2023, 0, 5),
			new Date(2023, 0, 15)
		];
		expect(rangesOverlap(range1, range2)).toBe(true);
	});

	test('should return false for non-overlapping ranges', (): void => {
		const range1: [Date, Date] = [
			new Date(2023, 0, 1),
			new Date(2023, 0, 10)
		];
		const range2: [Date, Date] = [
			new Date(2023, 0, 11),
			new Date(2023, 0, 20)
		];
		expect(rangesOverlap(range1, range2)).toBe(false);
	});

	test('should return true if one range starts where the other ends', (): void => {
		const range1: [Date, Date] = [
			new Date(2023, 0, 1),
			new Date(2023, 0, 10)
		];
		const range2: [Date, Date] = [
			new Date(2023, 0, 10),
			new Date(2023, 0, 20)
		];
		expect(rangesOverlap(range1, range2)).toBe(true);
	});
});
