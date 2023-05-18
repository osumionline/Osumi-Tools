export function formatNumber(num: number): string {
	if (num === null || num === undefined) {
		return '';
	}
	return num.toFixed(2).replace('.', ',');
}

export function toNumber(str: string): number {
	if (str === null || str === undefined || str === '') {
		return 0;
	}
	return parseFloat(str.replace(',', '.'));
}

export function urlencode(str: string | null): string | null {
	if (str === null) {
		return null;
	}
	return encodeURIComponent(str)
		.replace(/\%20/g, '+')
		.replace(/!/g, '%21')
		.replace(/'/g, '%27')
		.replace(/\(/g, '%28')
		.replace(/\)/g, '%29')
		.replace(/\*/g, '%2A')
		.replace(/\~/g, '%7E');
}

export function urldecode(str: string | null): string {
	if (!str) {
		return '';
	}
	return decodeURIComponent(
		str
			.replace(/\+/g, '%20')
			.replace(/\%21/g, '!')
			.replace(/\%27/g, "'")
			.replace(/\%28/g, '(')
			.replace(/\%29/g, ')')
			.replace(/\%2A/g, '*')
			.replace(/\%7E/g, '~')
	);
}

export function validateEmail(email: string): boolean {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.toLowerCase());
}

export interface ColorValues {
	r: number;
	g: number;
	b: number;
}

export function convertRange(
	value: number,
	oldMin: number,
	oldMax: number,
	newMin: number,
	newMax: number
): number {
	return (
		Math.round(
			(((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) +
				newMin) *
				10000
		) / 10000
	);
}

export function hexToRgbFloat(hex: string): ColorValues | null {
	const result: RegExpExecArray | null =
		/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: convertRange(parseInt(result[1], 16), 0, 255, 0, 1),
				g: convertRange(parseInt(result[2], 16), 0, 255, 0, 1),
				b: convertRange(parseInt(result[3], 16), 0, 255, 0, 1)
		  }
		: null;
}

export function addDays(date: Date, number: number): Date {
	const newDate = new Date(date);
	return new Date(newDate.setDate(date.getDate() + number));
}

export function getDate(date: Date): string | null {
	if (date === null) {
		return null;
	}
	const day: string =
		date.getDate() < 10 ? '0' + date.getDate() : date.getDate().toString();
	const month: string =
		date.getMonth() + 1 < 10
			? '0' + (date.getMonth() + 1)
			: (date.getMonth() + 1).toString();

	return day + '/' + month + '/' + date.getFullYear();
}

export function getCurrentDate(): string {
	const d: Date = new Date();
	return (
		d.getFullYear() +
		'-' +
		(d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) +
		'-' +
		(d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
	);
}

export function getDateFromString(str: string): Date | null {
	if (str === null) {
		return null;
	}
	let day: number = 0;
	let month: number = 0;
	let year: number = 0;
	let hour: number = 0;
	let minutes: number = 0;
	let seconds: number = 0;

	if (str.includes(' ')) {
		const strParts: string[] = str.split(' ');
		const dateParts: string[] = strParts[0].split('/');
		const hourParts: string[] = strParts[1].split(':');
		day = parseInt(dateParts[0]);
		month = parseInt(dateParts[1]) - 1;
		year = parseInt(dateParts[2]);
		hour = parseInt(hourParts[0]);
		minutes = parseInt(hourParts[1]);
		seconds = parseInt(hourParts[2]);
	} else {
		const dateParts: string[] = str.split('/');
		day = parseInt(dateParts[0]);
		month = parseInt(dateParts[1]) - 1;
		year = parseInt(dateParts[2]);
	}

	const date: Date = new Date(year, month, day, hour, minutes, seconds);
	return date;
}

export function getTwoNumberDecimal(value: number): number {
	return parseFloat((Math.round(value * 100) / 100).toFixed(2));
}
