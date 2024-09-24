/**
 * Represents RGB color values.
 */
export interface ColorValues {
	/**
	 * The red component of the color.
	 * @type {number}
	 */
	r: number;

	/**
	 * The green component of the color.
	 * @type {number}
	 */
	g: number;

	/**
	 * The blue component of the color.
	 * @type {number}
	 */
	b: number;
}

/**
 * Function to add a number of days to a given Date object.
 *
 * @param {Date} date - The original date to which days are going to be added.
 * @param {number} number - The number of days to be added.
 *
 * @returns {Date} The new date.
 *
 * @example
 * addDays(new Date(2023, 0, 1, 0, 0, 0, 0), 2)
 * // Returns "Tue Jan 03 2023 00:00:00 GMT+0100"
 */
export function addDays(date: Date, number: number): Date {
	const newDate = new Date(date);
	return new Date(newDate.setDate(date.getDate() + number));
}

/**
 * Function to get a human readable size from a byte amount number.
 *
 * @param {number} bytes - Amount of bytes.
 *
 * @returns {string} Size in human readable format ('Bytes', 'KB', 'MB', 'GB', 'TB').
 *
 * @example
 * bytesToSize(1024);
 * // Returns "1.0 KB"
 */
export function bytesToSize(bytes: number): string {
	const sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes === 0) {
		return 'n/a';
	}
	const i: number = Math.floor(Math.log(bytes) / Math.log(1024));
	if (i === 0) {
		return `${bytes} ${sizes[i]})`;
	}
	return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

/**
 * Function to capitalize the first letter of a string.
 *
 * @param {string} str - String to capitalize.
 *
 * @returns {string} String with the first letter capitalized.
 *
 * @example
 * capitalize('hello');
 * // Returns 'Hello'
 */
export function capitalize(str: string | null): string | null {
	if (str === null || str == '') {
		return null;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Function to convert a value in a range (i.e. hexadecimal value) to a value in a new range (i.e. decimal).
 *
 * @param {number} value - The original value to be converted.
 * @param {number} oldMin - The smallest value of the old range.
 * @param {number} oldMax - The maximum value of the old range.
 * @param {number} newMin - The smallest value of the new range.
 * @param {number} newMax - The maximum value of the new range.
 *
 * @returns {number} The given number converted to the new range.
 *
 * @example
 * convertRange(parseInt('ff', 16), 0, 255, 0, 1);
 * // Returns 1
 *
 * @example
 * const celsius = 25;
 * const fahrenheit = convertRange(celsius, 0, 100, 32, 212);
 * console.log(fahrenheit); // Returns 77
 */
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

/**
 * Function to format a given number to a string with the given decimal amount.
 *
 * @param {number} num - The number to be formatted.
 * @param {number} decimals - The number of decimals to be returned.
 *
 * @returns {string} The formatted number string.
 *
 * @example
 * formatNumber(15.267);
 * // Returns "15,26"
 *
 * @example
 * formatNumber(15.267, 3);
 * // Returns "15,267"
 */
export function formatNumber(num: number, decimals: number = 2): string {
	if (num === null || num === undefined) {
		return '';
	}
	return num.toFixed(decimals).replace('.', ',');
}

/**
 * Returns current date as a string compatible with MySQL.
 *
 * @returns {string} The current date.
 *
 * @example
 * getCurrentDate()
 * // Returns '2024-08-19'
 */
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

/**
 * Formats a given date according to the specified configuration or returns the formatted date directly.
 *
 * @param {Date | { date: Date; separator?: string; withHours?: boolean; withSeconds?: boolean; leadingZeros?: boolean; ampm?: boolean; pattern?: string; }} dateOrConfig - A Date object or a configuration object.
 *
 * @returns {string} The formatted date string.
 *
 * @example
 * getDate(new Date(2023, 0, 1));
 * // Returns "01/01/2023"
 *
 * @example
 * getDate({ date: new Date(2023, 0, 1), withHours: true, withSeconds: true, ampm: true, pattern: 'dmyhis' });
 * // Returns "01/01/2023 12:00:00am"
 */
export function getDate(
	dateOrConfig:
		| Date
		| {
				date: Date;
				separator?: string;
				withHours?: boolean;
				withSeconds?: boolean;
				leadingZeros?: boolean;
				ampm?: boolean;
				pattern?: string;
		  }
): string {
	const defaultConfig = {
		separator: '/',
		withHours: false,
		withSeconds: false,
		leadingZeros: true,
		ampm: false,
		pattern: 'dmyhis'
	} as const;

	const config =
		typeof dateOrConfig === 'object' && !(dateOrConfig instanceof Date)
			? { ...defaultConfig, ...dateOrConfig, date: dateOrConfig.date }
			: { ...defaultConfig, date: dateOrConfig as Date };

	const {
		date,
		separator,
		withHours: initialWithHours,
		withSeconds,
		leadingZeros,
		ampm,
		pattern
	} = config;

	let withHours: boolean = initialWithHours;
	if (withSeconds) {
		withHours = true;
	}

	const pad = (num: number): string =>
		leadingZeros && num < 10 ? `0${num}` : `${num}`;

	const year: string = pad(date.getFullYear());
	const month: string = pad(date.getMonth() + 1);
	const day: string = pad(date.getDate());
	const hours: string = pad(date.getHours());
	const minutes: string = pad(date.getMinutes());
	const seconds: string = pad(date.getSeconds());

	const ampmStr: string = ampm ? (parseInt(hours) >= 12 ? 'pm' : 'am') : '';

	if (
		!pattern.includes('d') ||
		!pattern.includes('m') ||
		!pattern.includes('y')
	) {
		throw new Error(
			'Pattern must contain at least these elements: "d", "m" and "y"'
		);
	}
	if (withHours && (!pattern.includes('h') || !pattern.includes('i'))) {
		throw new Error(
			'If time is to be returned, pattern must contain "h" and "i"'
		);
	}
	if (withSeconds && !pattern.includes('s')) {
		throw new Error(
			'If seconds are to be returned, pattern must contain "s"'
		);
	}

	let formattedDate: string = '';
	for (const char of pattern) {
		switch (char) {
			case 'd':
				formattedDate += day + separator;
				break;
			case 'm':
				formattedDate += month + separator;
				break;
			case 'y':
				formattedDate += year + separator;
				break;
			case 'h':
			case 'i':
			case 's':
				continue;
			default:
				throw new Error(`Unrecognized pattern: ${char}`);
		}
	}

	formattedDate = formattedDate.slice(0, -1);

	const timePart: string = withHours
		? `${ampm ? `${hours}:${minutes}` : `${hours}:${minutes}`}${
				withSeconds ? `:${seconds}` : ''
		  }${ampmStr}`
		: '';

	return formattedDate + (timePart ? ' ' + timePart : '');
}

/**
 * Get a Date object from a date in a string.
 *
 * @param {string} str - A Date in a string.
 *
 * @returns {Date | null} The Date object or null if is an invalid date.
 *
 * @example
 * getDateFromString('03/01/2023')
 * // Returns "Tue Jan 03 2023 00:00:00 GMT+0100"
 */
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

/**
 * Get a random number from a range (min, max).
 *
 * @param {number} min - Minimum number to get.
 *
 * @param {number} max - Maximum number to get.
 *
 * @returns {number} Random number between min and max.
 *
 * @example
 * getRandomNumber(1, 1000);
 * // Returns 846, 321, 549 ...
 */
export function getRandomNumber(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get a string representation of a Date object (year-month-day). `withHours` indicates if (hour:minutes:seconds) should also be returned.
 *
 * @param {Date | null} date - A Date object or null.
 *
 * @param {boolean} withHours - Indicates if hour:minutes:seconds should also be returned.
 *
 * @return {string | null} String representation of the Date object.
 *
 * @example
 * getStringFromDate(new Date(2024, 8, 24, 10, 42, 0), true)
 * // Returns "2024-09-24 10:42:00"
 */
export function getStringFromDate(
	date: Date | null,
	withHours: boolean = false
): string | null {
	if (date === null) {
		return null;
	}
	const year: number = date.getFullYear();
	const month: number = date.getMonth() + 1;
	const day: number = date.getDate();

	const dateStr: string = `${year}-${month < 10 ? '0' + month : month}-${
		day < 10 ? '0' + day : day
	}`;

	if (!withHours) {
		return dateStr;
	}

	const hour: number = date.getHours();
	const minutes: number = date.getMinutes();
	const seconds: number = date.getSeconds();

	return (
		dateStr +
		` ${hour < 10 ? '0' + hour : hour}:${
			minutes < 10 ? '0' + minutes : minutes
		}:${seconds < 10 ? '0' + seconds : seconds}`
	);
}

/**
 * Format a number with 2 decimals.
 *
 * @param {number} value - The number to be formatted.
 *
 * @returns {number} The formatted number.
 *
 * @example
 * getTwoNumberDecimal(15.267845)
 * // Returns 15.27
 */
export function getTwoNumberDecimal(value: number): number {
	return parseFloat((Math.round(value * 100) / 100).toFixed(2));
}

/**
 * Function to get the numerical values of an hexadecimal color value (i.e. FF0000 -> {r: 1, g: 0, b: 0}
 *
 * @param {string} hex - The color on hexadecimal format.
 *
 * @returns {ColorValues | null} The ColorValues object or null if there was an error.
 *
 * @example
 * hexToRgbFloat('#ff0000');
 * // Returns {"r":1,"g":0,"b":0}
 */
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

/**
 * Function to format a given string to a number.
 *
 * @param {string} str - The string number to be formatted.
 *
 * @returns {number} The formatted number.
 *
 * @example
 * toNumber("15,267");
 * // Returns 15.267
 */
export function toNumber(str: string): number {
	if (str === null || str === undefined || str === '') {
		return 0;
	}
	return parseFloat(str.replace(',', '.'));
}

/**
 * Function to decode a previously encoded string. Returns null if null is given.
 *
 * @param {string | null} str - The previously encoded string.
 *
 * @returns {string} The decoded string.
 *
 * @example
 * urldecode("test+osumi+urldecode");
 * // Returns "test osumi urldecode"
 */
export function urldecode(str: string | null): string {
	if (str === null || str === undefined || str === '') {
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

/**
 * Function to safely URLEncode a string. Returns null if null is given.
 *
 * @param {string | null} str - The string encoded.
 *
 * @returns {string | null} The encoded string.
 *
 * @example
 * urlencode("test osumi urlencode");
 * // Returns "test+osumi+urlencode"
 */
export function urlencode(str: string | null): string | null {
	if (str === null || str === undefined) {
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

/**
 * Function to validate the correct structure of an email address.
 *
 * @param {string} email - The email address to be validated.
 *
 * @returns {boolean} True if is a valid email address or false otherwise.
 *
 * @example
 * validateEmail("test@example.com");
 * // Returns true
 *
 * @example
 * validateEmail("test@example");
 * // Returns false
 */
export function validateEmail(email: string): boolean {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.toLowerCase());
}
