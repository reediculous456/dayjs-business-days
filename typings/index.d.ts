import { Dayjs, PluginFunc } from 'dayjs';

declare const plugin: PluginFunc;
export as namespace plugin
export = plugin;
declare namespace plugin {
  interface BusinessDaysPlugin {
    businessDaysAdd(days: number): Dayjs;
    businessDaysInMonth(): Dayjs[];
    businessDaysSubtract(days: number): Dayjs;
    businessDiff(date: Dayjs): number;
    businessWeeksInMonth(): Dayjs[][];
    isAdditionalWorkingDay(): boolean;
    isBusinessDay(): boolean;
    isHoliday(): boolean;
    lastBusinessDayOfMonth(): Dayjs;
    nextBusinessDay(): Dayjs;
    prevBusinessDay(): Dayjs;
  }

  interface BusinessDaysPluginOptions {
    additionalWorkingDayFormat?: string;
    additionalWorkingDays?: string[];
    holidayFormat?: string;
    holidays?: string[];
    workingWeekdays?: number[];
  }
}

declare module 'dayjs' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Dayjs extends plugin.BusinessDaysPlugin { }

  function getAdditionalWorkingDayFormat(): string | undefined;
  function getAdditionalWorkingDays(): string[];
  function getHolidayFormat(): string | undefined;
  function getHolidays(): string[];
  function getWorkingWeekdays(): number[];
  function setAdditionalWorkingDayFormat(additionalWorkingDayFormat: string): void;
  function setAdditionalWorkingDays(additionalWorkingDays: string[]): void;
  function setHolidayFormat(holidayFormat: string): void;
  function setHolidays(holidays: string[]): void;
  function setWorkingWeekdays(workingWeekdays: number[]): void;
}
