# dayjs-business-days2

[![npm version](https://badge.fury.io/js/dayjs-business-days2.svg)](https://www.npmjs.com/package/dayjs-business-days2)

This is a plugin for Day.js that allows for Date calculations to take place that only consider Business Days i.e Monday to Friday

- Calculate if date is a Business Day
- Add/Subtract Business Days
- Calculate difference between dates in Business Days
- Get Next/Prev Business Day
- Get all Business Days/Weeks in a Month
- Get the last Business Day of a month
- Based off of [moment-business-days](https://www.npmjs.com/package/moment-business-days)
- Forked from [dayjs-business-days](https://www.npmjs.com/package/dayjs-business-days) and converted to TypeScript

## Current CI/CD Status

[![Node.js CI](https://github.com/reediculous456/dayjs-business-days/actions/workflows/node.js.yml/badge.svg)](https://github.com/reediculous456/dayjs-business-days/actions/workflows/node.js.yml) [![NPM Publish](https://github.com/reediculous456/dayjs-business-days/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/reediculous456/dayjs-business-days/actions/workflows/npm-publish.yml)

## Contents

- [dayjs-business-days2](#dayjs-business-days2)
  - [Current CI/CD Status](#current-cicd-status)
  - [Contents](#contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Usage Guide](#usage-guide)
    - [isHoliday() =\> Boolean](#isholiday--boolean)
    - [isBusinessDay() =\> Boolean](#isbusinessday--boolean)
    - [isAdditionalWorkingDay() =\> Boolean](#isadditionalworkingday--boolean)
    - [businessDaysAdd(number) =\> Day.js Object](#businessdaysaddnumber--dayjs-object)
    - [businessDaysSubtract(number) =\> Day.js Object](#businessdayssubtractnumber--dayjs-object)
    - [businessDiff(date) =\> Number](#businessdiffdate--number)
    - [nextBusinessDay() =\> Day.js Object](#nextbusinessday--dayjs-object)
    - [prevBusinessDay() =\> Day.js Object](#prevbusinessday--dayjs-object)
    - [businessDaysInMonth() =\> \[Day.js Object\]](#businessdaysinmonth--dayjs-object)
    - [lastBusinessDayOfMonth() =\> Day.js Object](#lastbusinessdayofmonth--dayjs-object)
    - [businessWeeksInMonth() =\> \[\[Day.js Object\]\]](#businessweeksinmonth--dayjs-object)
    - [getWorkingWeekdays() =\> \[number\]](#getworkingweekdays--number)
    - [setWorkingWeekdays() =\> void](#setworkingweekdays--void)
    - [getHolidays() =\> \[string\]](#getholidays--string)
    - [setHolidays() =\> void](#setholidays--void)
    - [getHolidayFormat() =\> string](#getholidayformat--string)
    - [setHolidayFormat() =\> void](#setholidayformat--void)
    - [getAdditionalWorkingDays() =\> \[string\]](#getadditionalworkingdays--string)
    - [setAdditionalWorkingDays() =\> void](#setadditionalworkingdays--void)
    - [getAdditionalWorkingDayFormat() =\> string](#getadditionalworkingdayformat--string)
    - [setAdditionalWorkingDayFormat() =\> void](#setadditionalworkingdayformat--void)
  - [Local Development and Contributing](#local-development-and-contributing)

## Getting Started

The following guide will help you use the plugin with Day.js, and explain the plugins API.

### Prerequisites

Day.js version 1.x installed

### Installing

You can install via Yarn or npm

```bash
yarn add dayjs-business-days2
```

```bash
npm install dayjs-business-days2
```

## Usage Guide

You will need to import the plugin and activate it via the Day.js `.extend()` function

```javascript
import dayjs from 'dayjs';
import dayjsBusinessDays from 'dayjs-business-days2';

dayjs.extend(dayjsBusinessDays);
```

### isHoliday() => Boolean

Check if the date is a holiday. Returns **true** or **false**

```javascript
// Add holidays to plugin options
const options = {
  holidays: [`2020-12-25`],
  holidayFormat: `YYYY-MM-DD`,
};
dayjs.extend(businessDays, options);

// Christmas day is a Friday
dayjs(`2020-12-25`).isHoliday(); // returns true
```

### isBusinessDay() => Boolean

Check if the date is a business day. Returns **true** or **false**

```javascript
// Christmas day is a Friday
dayjs(`2020-12-25`).isBusinessDay(); // returns true

// Boxing day is a Saturday
dayjs(`2020-12-26`).isBusinessDay(); // returns false
```

### isAdditionalWorkingDay() => Boolean

Check if the date is an additional working day. Returns **true** or **false**

```javascript
// Add holidays to plugin options
const options = {
  additionalWorkingDays: [`2023-01-28`],
  additionalWorkingDayFormat: `YYYY-MM-DD`,
};
dayjs.extend(businessDays, options);

// Check
dayjs(`2023-01-28`).isAdditionalWorkingDay(); // returns true
```

### businessDaysAdd(number) => Day.js Object

- `number` {`Number`} Number of Business Days to be added

Adds the `number` of Business Days to the current date. Returns the new date as a **Day.js object**

```javascript
dayjs(`2020-12-25`).businessDaysAdd(3).format(`DD/MM/YYYY`); // returns 30/12/2020
```

### businessDaysSubtract(number) => Day.js Object

- `number` {`Number`} Number of Business Days to be subtracted

Subtracts the `number` of Business Days from the current date. Returns the new date as a **Day.js object**

```javascript
dayjs(`2020-12-30`).businessDaysSubtract(3).format(`DD/MM/YYYY`); // returns 25/12/2020
```

### businessDiff(date) => Number

- `date` {`Day.js Date`} The date to be diffed from

Calculates the number of business days between a Day.js date and `date`. Returns the difference as a **positive or negative number**.

```javascript
dayjs(`2020-12-25`).businessDiff(dayjs(`2020-12-30`)); // returns -5
dayjs(`2020-12-30`).businessDiff(dayjs(`2020-12-25`)); // returns 5
```

### nextBusinessDay() => Day.js Object

Calculates the next Business Day. Returns a **Day.js object**

```javascript
// 25th December 2020 is a Friday. Next business day is Monday 28th December.
dayjs(`2020-12-25`).nextBusinessDay().format(`DD/MM/YYYY`); // returns 28/12/2020
```

### prevBusinessDay() => Day.js Object

Calculates the previous Business Day. Returns a **Day.js object**

```javascript
// 28th December 2020 is a Monday. Previous business day is Friday 25th December.
dayjs(`2020-12-28`).prevBusinessDay().format(`DD/MM/YYYY`); // returns 25/12/2020
```

### businessDaysInMonth() => [Day.js Object]

Calculates all of the business days in a given month. Returns an array of **Day.js objects**

```javascript
dayjs(`2020-12-25`).businessDaysInMonth();
// returns equivalent of [dayjs(`2020-12-01`), dayjs(`2020-12-02`), ...]
```

### lastBusinessDayOfMonth() => Day.js Object

Calculates the last Business Day of the month. Returns a **Day.js object**

```javascript
// 30th September 2021 is a Thursday and is the last business day of the month.
dayjs(`2021-09-01`).lastBusinessDayOfMonth().format(`DD/MM/YYYY`); // returns 30/09/2021
```

### businessWeeksInMonth() => [[Day.js Object]]

Calculates all of the business weeks and days in a given month. Returns an two dimensional array of **Day.js objects**

```javascript
dayjs(`2020-12-25`).businessWeeksInMonth();
// returns equivalent of
// [
//   [dayjs(`2020-12-01`), dayjs(`2020-12-02`), ...],
//   [dayjs(`2020-12-07`), dayjs(`2020-12-08`), ...],
//   ...
// ]
```

### getWorkingWeekdays() => [number]

Returns an array of **numbers** representing the current days fo the week that are considered business days

```javascript
dayjs.getWorkingWeekdays(); // returns [ 1, 2, 3, 4, 5 ]
```

### setWorkingWeekdays() => void

Sets the days of the week that are considered business days to the given array of **numbers** where 0 is Sunday and 6 is Saturday

```javascript
dayjs.setWorkingWeekdays([ 0, 3, 4, 5 ]);
```

### getHolidays() => [string]

Returns an array of **strings** representing the currently set holidays

```javascript
const options = {
  holidays: [`2020-12-25`],
  holidayFormat: `YYYY-MM-DD`,
};
dayjs.extend(businessDays, options);

dayjs.getHolidays(); // returns [ `2020-12-25` ]
```

### setHolidays() => void

Sets the holiday list to the given array of **strings**

```javascript
dayjs.setHolidays([ `2020-12-25`, `2021-01-01` ]);
```

### getHolidayFormat() => string

Returns a **string** representing the currently expected holiday format

```javascript
const options = {
  holidays: [`2020-12-25`],
  holidayFormat: `YYYY-MM-DD`,
};
dayjs.extend(businessDays, options);

dayjs.getHolidayFormat(); // returns `YYYY-MM-DD`
```

### setHolidayFormat() => void

Sets the holiday list to the given a **string**

```javascript
dayjs.setHolidayFormat(`MM-DD-YYYY`);
```

### getAdditionalWorkingDays() => [string]

Returns an array of **strings** representing the currently set additional working days

```javascript
const options = {
  additionalWorkingDays: [`2023-01-28`],
  additionalWorkingDayFormat: `YYYY-MM-DD`,
};
dayjs.extend(businessDays, options);

dayjs.getAdditionalWorkingDays(); // returns [ `2023-01-28` ]
```

### setAdditionalWorkingDays() => void

Sets the additional working day list to the given array of **strings**
Additional working days are days that your business is open outside of your regular working weekdays.

```javascript
dayjs.setAdditionalWorkingDays([ `2023-01-28`, `2023-01-29` ]);
```

### getAdditionalWorkingDayFormat() => string

Returns a **string** representing the currently expected additional working day format

```javascript
const options = {
  additionalWorkingDays: [`2023-01-28`],
  additionalWorkingDayFormat: `YYYY-MM-DD`,
};
dayjs.extend(businessDays, options);

dayjs.getAdditionalWorkingDayFormat(); // returns `YYYY-MM-DD`
```

### setAdditionalWorkingDayFormat() => void

Sets the additional working day format to the given a **string**

```javascript
dayjs.setAdditionalWorkingDayFormat(`MM-DD-YYYY`);
```

## Local Development and Contributing

I am more than happy to accept PRs for bugs, improvements or new features.
Developing your own changes locally is easy, you just need to clone the repo

```bash
git clone git@github.com/reediculous456/dayjs-business-days

cd dayjs-business-days
```

and install the dependencies with either `npm` or `yarn`

```bash
npm i
```

```bash
yarn
```

Tests can be ran with the `test` script

```bash
npm run test
```

```bash
yarn test
```
