import dayjs from 'dayjs';
import businessDays from '../src';

const laborDay = `2020-09-07`;
const january27th = `2023-01-27`;
const january28th = `2023-01-28`;
const january29th = `2023-01-29`;

const options = {
  additionalWorkingDayFormat: `YYYY-MM-DD`,
  additionalWorkingDays: [ january28th, january29th ],
  holidayFormat: `YYYY-MM-DD`,
  holidays: [ laborDay, january27th ],
  workingWeekdays: [ 0, 2, 5 ],
};
dayjs.extend(businessDays, options);

describe(`businessDaysWithOptions`, () => {
  it(`Should not be a business day on holidays`, () => {
    expect(dayjs(`2020-09-07T00:00:00.000`).isHoliday())
      .toBe(true);
    expect(dayjs(`2023-01-27T00:00:00.000`).isHoliday())
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

  it(`Should change business days based on additionalWorkingDays`, () => {
    expect(dayjs(`2023-01-28T00:00:00.000`).isBusinessDay())
      .toBe(true);
    expect(dayjs(`2023-01-29T00:00:00.000`).isBusinessDay())
      .toBe(true);
    expect(dayjs(`2023-01-27T00:00:00.000`).isBusinessDay())
      .toBe(false);
    expect(dayjs(`2023-01-31T00:00:00.000`).businessDiff(dayjs(`2023-01-27T00:00:00.000`)))
      .toBe(2); // business days: `2023-01-28`, `2023-01-29`, `2023-01-31`. Monday (`2023-01-30`) is not in workingWeekdays: [ 0, 2, 5 ]
  });

  it(`Should return an array of holidays given holiday options`, () => {
    expect(dayjs.getHolidays())
      .toEqual([ laborDay, january27th ]);
  });

  it(`Should return the set holiday format given holidayFormat as an option`, () => {
    expect(dayjs.getHolidayFormat())
      .toEqual(`YYYY-MM-DD`);
  });

  it(`Should return an array of additional working days given additionalWorkingDays options`, () => {
    expect(dayjs.getAdditionalWorkingDays())
      .toEqual([ january28th, january29th ]);
  });

  it(`Should return the set additional working day format given additionalWorkingDayFormat as an option`, () => {
    expect(dayjs.getAdditionalWorkingDayFormat())
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

  it(`Should change the additional working day list after calling setAdditionalWorkingDays()`, () => {
    dayjs.setAdditionalWorkingDays([ january29th ]);
    expect(dayjs.getAdditionalWorkingDays())
      .toEqual([ january29th ]);
  });

  it(`Should change the additional working day format after calling setAdditionalWorkingDayFormat()`, () => {
    dayjs.setAdditionalWorkingDayFormat(`MM-DD-YYYY`);
    expect(dayjs.getAdditionalWorkingDayFormat())
      .toEqual(`MM-DD-YYYY`);
  });

  it(`Should change the working weekday list after calling setWorkingWeekdays()`, () => {
    dayjs.setWorkingWeekdays([ 1, 3, 6 ]);
    expect(dayjs.getWorkingWeekdays())
      .toEqual([ 1, 3, 6 ]);
  });
});
