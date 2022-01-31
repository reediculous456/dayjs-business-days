import { Dayjs, PluginFunc } from 'dayjs';

declare const plugin: PluginFunc;
export as namespace plugin
export = plugin;
declare namespace plugin {
  interface BusinessDaysPluginOptions {
    holidays?: string[];
    holidayFormat?: string;
  }

  interface BusinessDaysPlugin {
    isHoliday(): boolean;
    isBusinessDay(): boolean;
    businessDaysAdd(days: number): Dayjs;
    businessDaysSubtract(days: number): Dayjs;
    businessDiff(date: Dayjs): number;
    nextBusinessDay(): Dayjs;
    prevBusinessDay(): Dayjs;
    businessDaysInMonth(): Dayjs[];
    lastBusinessDayOfMonth(): Dayjs;
    businessWeeksInMonth(): Dayjs[][];
  }
}

declare module 'dayjs' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, no-shadow
  interface Dayjs extends plugin.BusinessDaysPlugin { }
}
