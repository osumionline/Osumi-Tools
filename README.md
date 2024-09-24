# Osumi Tools

Set of tools, little functions, to help the development of frontend projects (tried on Angular, but I guess it could work anywhere).

These are the available functions:

-   **addDays**: Function to add a number of days to a given Date object.
-   **bytesToSize**: Function to get a human readable size from an amount of bytes.
-   **capitalize**: Function to capitalize the first letter of a string.
-   **convertRange**: Function to convert a value in a range (i.e. hexadecimal value) to a value in a new range (i.e. decimal).
-   **formatNumber**: Function to format a given number to a string with the given decimal amount.
-   **getCurrentDate**: Returns current date as a string compatible with MySQL.
-   **getDate**: Formats a given date according to the specified configuration or returns the formatted date directly.
-   **getDateFromString**: Get a Date object from a date in a string.
-   **getRandomNumber**: Get a random number from a range (min, max).
-   **getStringFromDate**: Get a string representation of a Date object.
-   **getTwoNumberDecimal**: Format a number with 2 decimals.
-   **hexToRgbFloat**: Function to get the numerical values of an hexadecimal color value (i.e. FF0000 -> {r: 1, g: 0, b: 0}
-   **toNumber**: Function to format a given string to a number.
-   **urldecode**: Function to decode a previously encoded string. Returns null if null is given.
-   **urlencode**: Function to safely URLEncode a string. Returns null if null is given.
-   **validateEmail**: Function to validate the correct structure of an email address.

These are a small collection of useful tools I have needed from time to time, from a project to another, and I collected them on a library so it can be easily included and used. Every function has its JSDoc explaining what it takes and returns and tests are included.

For example, you just need to include it on your package.json:

```
  "dependencies": {
    "@osumi/tools": "^1.5.0",
  }
```

Then in a component you just import and use them:

```
import { urldecode } from "@osumi/tools";

const decoded: string = urldecode(result.name);
```

_2024 Iñigo Gorosabel_
