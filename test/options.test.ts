import dayjs from 'dayjs';
import businessDays from '../src';

const july4th = `2020-07-04`;
const laborDay = `2020-09-07`;

const options = {
  holidayFormat: `YYYY-MM-DD`,
  holidays: [ july4th, laborDay ],
  workingWeekdays: [ 0, 2, 5 ],
};
dayjs.extend(businessDays, options);

describe(`businessDaysWithOptions`, () => {
  it(`Should not be a business day on holidays`, () => {
    expect(dayjs(`2020-07-04T00:00:00.000`).isHoliday())
      .toBe(true);
    expect(dayjs(`2020-09-07T00:00:00.000`).isHoliday())
      .toBe(true);
    expect(dayjs(`2020-07-04T00:00:00.000`).isBusinessDay())
      .toBe(false);
    expect(dayjs(`2020-09-07T00:00:00.000`).isBusinessDay())
      .toBe(false);
  });

  it(`Should change business days based on workingWeekdays`, () => {
    expect(dayjs(`2022-01-02T00:00:00.000`).isBusinessDay())
      .toBe(true);
    expect(dayjs(`2022-01-03T00:00:00.000`).isBusinessDay())
      .toBe(false);
    expect(dayjs(`2022-01-04T00:00:00.000`).isBusinessDay())
      .toBe(true);
    expect(dayjs(`2022-01-05T00:00:00.000`).isBusinessDay())
      .toBe(false);
    expect(dayjs(`2022-01-06T00:00:00.000`).isBusinessDay())
      .toBe(false);
    expect(dayjs(`2022-01-07T00:00:00.000`).isBusinessDay())
      .toBe(true);
    expect(dayjs(`2022-01-08T00:00:00.000`).isBusinessDay())
      .toBe(false);
  });

  it(`Should return an array of holidays given holiday options`, () => {
    expect(dayjs.getHolidays())
      .toEqual([ july4th, laborDay ]);
  });

  it(`Should return the set holiday format given holidayFormat as an option`, () => {
    expect(dayjs.getHolidayFormat())
      .toEqual(`YYYY-MM-DD`);
  });

  it(`Should return the set working weekdays given workingWeekdays as an option`, () => {
    expect(dayjs.getWorkingWeekdays())
      .toEqual([ 0, 2, 5 ]);
  });

  it(`Should change the holiday list after calling setHolidays()`, () => {
    dayjs.setHolidays([ laborDay ]);
    expect(dayjs.getHolidays())
      .toEqual([ laborDay ]);
  });

  it(`Should change the holiday format after calling setHolidayFormat()`, () => {
    dayjs.setHolidayFormat(`MM-DD-YYYY`);
    expect(dayjs.getHolidayFormat())
      .toEqual(`MM-DD-YYYY`);
  });

  it(`Should change the working weekday list after calling setWorkingWeekdays()`, () => {
    dayjs.setWorkingWeekdays([ 1, 3, 6 ]);
    expect(dayjs.getWorkingWeekdays())
      .toEqual([ 1, 3, 6 ]);
  });
});
