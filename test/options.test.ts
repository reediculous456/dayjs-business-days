import dayjs from 'dayjs';
import businessDays from '../src';

const july4th = `2020-07-04`;
const laborDay = `2020-09-07`;

const options = {
  holidayFormat: `YYYY-MM-DD`,
  holidays: [ july4th, laborDay ],
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
});
