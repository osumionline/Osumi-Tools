/**
 * Represents RGB color values.
 */
export interface ColorValues {
	/**
	 * The red component of the color.
	 */
	r: number;

	/**
	 * The green component of the color.
	 */
	g: number;

	/**
	 * The blue component of the color.
	 */
	b: number;
}

/**
 * Configuration object used by getDate.
 */
export interface GetDateConfig {
	/**
	 * Date to format.
	 */
	date: Date;

	/**
	 * Separator used between date parts.
	 *
	 * @default '/'
	 */
	separator?: string;

	/**
	 * Indicates if hours and minutes should be returned.
	 *
	 * @default false
	 */
	withHours?: boolean;

	/**
	 * Indicates if seconds should also be returned.
	 *
	 * @default false
	 */
	withSeconds?: boolean;

	/**
	 * Indicates if single digit values should be padded with leading zeroes.
	 *
	 * @default true
	 */
	leadingZeros?: boolean;

	/**
	 * Indicates if time should be returned in 12-hour format with am/pm suffix.
	 *
	 * @default false
	 */
	ampm?: boolean;

	/**
	 * Order pattern for date parts.
	 *
	 * Supported date tokens: d, m, y
	 * Supported time tokens: h, i, s
	 *
	 * @default 'dmyhis'
	 */
	pattern?: string;
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
	const newDate: Date = new Date(date);
	newDate.setDate(newDate.getDate() + number);
	return newDate;
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
		return `${bytes} ${sizes[i]}`;
	}

	return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

/**
 * Function to capitalize the first letter of a string.
 *
 * @param {string | null} str - String to capitalize.
 *
 * @returns {string | null} String with the first letter capitalized.
 *
 * @example
 * capitalize('hello');
 * // Returns 'Hello'
 */
export function capitalize(str: string | null): string | null {
	if (str === null) {
		return null;
	}

	if (str === '') {
		return '';
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
 * @param {number | null | undefined} num - The number to be formatted.
 * @param {number} decimals - The number of decimals to be returned.
 *
 * @returns {string} The formatted number string.
 *
 * @example
 * formatNumber(15.267);
 * // Returns "15,27"
 *
 * @example
 * formatNumber(15.267, 3);
 * // Returns "15,267"
 */
export function formatNumber(
	num: number | null | undefined,
	decimals: number = 2
): string {
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
 * @param {Date | GetDateConfig} dateOrConfig - A Date object or a configuration object.
 *
 * @returns {string} The formatted date string.
 *
 * @example
 * getDate(new Date(2023, 0, 1));
 * // Returns "01/01/2023"
 *
 * @example
 * getDate({
 *   date: new Date(2023, 0, 1),
 *   withHours: true,
 *   withSeconds: true,
 *   ampm: true,
 *   pattern: 'dmyhis'
 * });
 * // Returns "01/01/2023 12:00:00am"
 */
export function getDate(dateOrConfig: Date | GetDateConfig): string {
	const defaultConfig: Required<Omit<GetDateConfig, 'date'>> = {
		separator: '/',
		withHours: false,
		withSeconds: false,
		leadingZeros: true,
		ampm: false,
		pattern: 'dmyhis'
	};

	const config: { date: Date } & Required<Omit<GetDateConfig, 'date'>> =
		dateOrConfig instanceof Date
			? { ...defaultConfig, date: dateOrConfig }
			: { ...defaultConfig, ...dateOrConfig };

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

	const pad = (num: number): string => {
		if (leadingZeros && num < 10) {
			return `0${num}`;
		}

		return `${num}`;
	};

	const year: string = `${date.getFullYear()}`;
	const month: string = pad(date.getMonth() + 1);
	const day: string = pad(date.getDate());

	const rawHours24: number = date.getHours();
	const minutes: string = pad(date.getMinutes());
	const seconds: string = pad(date.getSeconds());

	let displayHours: number = rawHours24;
	let ampmStr: string = '';

	if (ampm) {
		ampmStr = rawHours24 >= 12 ? 'pm' : 'am';
		displayHours = rawHours24 % 12;

		if (displayHours === 0) {
			displayHours = 12;
		}
	}

	const hours: string = pad(displayHours);

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
		throw new Error('If seconds are to be returned, pattern must contain "s"');
	}

	const datePattern: string = pattern.replace(/[his]/g, '');
	let formattedDate: string = '';

	for (const char of datePattern) {
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
			default:
				throw new Error(`Unrecognized pattern: ${char}`);
		}
	}

	formattedDate = formattedDate.slice(0, -1);

	const timePart: string = withHours
		? `${hours}:${minutes}${withSeconds ? `:${seconds}` : ''}${ampmStr}`
		: '';

	return formattedDate + (timePart ? ` ${timePart}` : '');
}

/**
 * Get a Date object from a date string in dd/mm/yyyy or dd/mm/yyyy hh:mm:ss format.
 *
 * @param {string | null} str - A date in string format.
 *
 * @returns {Date | null} The Date object or null if it is an invalid date.
 *
 * @example
 * getDateFromString('03/01/2023')
 * // Returns "Tue Jan 03 2023 00:00:00 GMT+0100"
 */
export function getDateFromString(str: string | null): Date | null {
	if (str === null || str.trim() === '') {
		return null;
	}

	const trimmedStr: string = str.trim();

	const dateTimeRegex: RegExp =
		/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?: (\d{1,2}):(\d{1,2}):(\d{1,2}))?$/;
	const match: RegExpExecArray | null = dateTimeRegex.exec(trimmedStr);

	if (match === null) {
		return null;
	}

	const day: number = parseInt(match[1], 10);
	const month: number = parseInt(match[2], 10) - 1;
	const year: number = parseInt(match[3], 10);
	const hour: number = match[4] ? parseInt(match[4], 10) : 0;
	const minutes: number = match[5] ? parseInt(match[5], 10) : 0;
	const seconds: number = match[6] ? parseInt(match[6], 10) : 0;

	const date: Date = new Date(year, month, day, hour, minutes, seconds);

	if (
		Number.isNaN(date.getTime()) ||
		date.getFullYear() !== year ||
		date.getMonth() !== month ||
		date.getDate() !== day ||
		date.getHours() !== hour ||
		date.getMinutes() !== minutes ||
		date.getSeconds() !== seconds
	) {
		return null;
	}

	return date;
}

/**
 * Get a random number from a range (min, max).
 *
 * @param {number} min - Minimum number to get.
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
 * Set a Date object to the start of the day (00:00:00.000).
 *
 * @param {Date} d - Date to set to start of day.
 *
 * @returns {Date} New Date object set to start of day.
 *
 * @example
 * startOfDay(new Date(2023, 0, 1, 15, 30, 45, 123))
 * // Returns "Sun Jan 01 2023 00:00:00 GMT+0100"
 */
export function startOfDay(d: Date): Date {
	const x: Date = new Date(d);
	x.setHours(0, 0, 0, 0);
	return x;
}

/**
 * Set a Date object to the end of the day (23:59:59.999).
 *
 * @param {Date} d - Date to set to end of day.
 *
 * @returns {Date} New Date object set to end of day.
 *
 * @example
 * endOfDay(new Date(2023, 0, 1, 15, 30, 45, 123))
 * // Returns "Sun Jan 01 2023 23:59:59 GMT+0100"
 */
export function endOfDay(d: Date): Date {
	const x: Date = new Date(d);
	x.setHours(23, 59, 59, 999);
	return x;
}

/**
 * Function to check if two date ranges overlap.
 *
 * @param {[Date, Date]} a - The first date range as a tuple [start, end].
 * @param {[Date, Date]} b - The second date range as a tuple [start, end].
 *
 * @returns {boolean} True if the two date ranges overlap, false otherwise.
 *
 * @example
 * const range1 = [new Date(2023, 0, 1), new Date(2023, 0, 10)];
 * const range2 = [new Date(2023, 0, 5), new Date(2023, 0, 15)];
 * rangesOverlap(range1, range2);
 * // Returns true
 *
 * @example
 * const range1 = [new Date(2023, 0, 1), new Date(2023, 0, 10)];
 * const range2 = [new Date(2023, 0, 11), new Date(2023, 0, 20)];
 * rangesOverlap(range1, range2);
 * // Returns false
 */
export function rangesOverlap(a: [Date, Date], b: [Date, Date]): boolean {
	// Ranges overlap if the start of one is before or equal to the end of the other and vice versa.
	return a[0] <= b[1] && b[0] <= a[1];
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
 * Function to get the numerical values of an hexadecimal color value (i.e. FF0000 -> {r: 1, g: 0, b: 0}).
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
 * @param {string | null | undefined} str - The string number to be formatted.
 *
 * @returns {number} The formatted number.
 *
 * @example
 * toNumber("15,267");
 * // Returns 15.267
 */
export function toNumber(str: string | null | undefined): number {
	if (str === null || str === undefined || str === '') {
		return 0;
	}

	return parseFloat(str.replace(',', '.'));
}

/**
 * Function to decode a previously encoded string.
 *
 * @param {string | null | undefined} str - The previously encoded string.
 *
 * @returns {string} The decoded string.
 *
 * @example
 * urldecode("test+osumi+urldecode");
 * // Returns "test osumi urldecode"
 */
export function urldecode(str: string | null | undefined): string {
	if (str === null || str === undefined || str === '') {
		return '';
	}

	return decodeURIComponent(
		str
			.replace(/\+/g, '%20')
			.replace(/%21/g, '!')
			.replace(/%27/g, "'")
			.replace(/%28/g, '(')
			.replace(/%29/g, ')')
			.replace(/%2A/g, '*')
			.replace(/%7E/g, '~')
	);
}

/**
 * Function to safely encode a string for use in URLs.
 *
 * @param {string | null | undefined} str - The string to encode.
 *
 * @returns {string | null} The encoded string.
 *
 * @example
 * urlencode("test osumi urlencode");
 * // Returns "test+osumi+urlencode"
 */
export function urlencode(str: string | null | undefined): string | null {
	if (str === null || str === undefined) {
		return null;
	}

	return encodeURIComponent(str)
		.replace(/%20/g, '+')
		.replace(/!/g, '%21')
		.replace(/'/g, '%27')
		.replace(/\(/g, '%28')
		.replace(/\)/g, '%29')
		.replace(/\*/g, '%2A')
		.replace(/~/g, '%7E');
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
	const re: RegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email.toLowerCase());
}

/**
 * Function to normalize a string by converting it to lowercase, removing diacritics (accents), and trimming whitespace.
 *
 * @param {string} s - The string to be normalized.
 *
 * @returns {string} The normalized string.
 *
 * @example
 * normalize('Árbol');
 * // Returns 'arbol'
 *
 * @example
 * normalize('  Café  ');
 * // Returns 'cafe'
 */
export function normalize(s: string): string {
	return s
		.toLowerCase()
		.normalize('NFD')
		.replace(/\p{Diacritic}/gu, '')
		.trim();
}

/**
 * Function to check if two strings are equal after normalizing them.
 * Normalization includes converting to lowercase, removing diacritics (accents), and trimming whitespace.
 *
 * @param {string} [a] - The first string to compare.
 * @param {string} [b] - The second string to compare.
 *
 * @returns {boolean} True if the normalized strings are equal, false otherwise.
 *
 * @example
 * stringEquals('Árbol', 'arbol');
 * // Returns true
 *
 * @example
 * stringEquals('  Hello  ', 'hello');
 * // Returns true
 *
 * @example
 * stringEquals('Test', 'Different');
 * // Returns false
 */
export function stringEquals(a?: string, b?: string): boolean {
	return normalize(a || '') === normalize(b || '');
}