/* eslint-disable no-shadow */
// import i18n from '@/plugins/vue-i18n';

export function localTimezoneStr() {
    const str = (new Date().getTimezoneOffset() / 60).toString();
    return str.includes('-') ? str.replace('-', '+') : `-${str}`;
  }
  
  export function curLocalIsoStr() {
    const msOffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
    return (new Date(Date.now() - msOffset)).toISOString().slice(0, -1);
  }
  
  export function curLocalIsoDateStr() {
    return curLocalIsoStr().substr(0, 10);
  }
  
  export function curLocalIsoTimeStr() {
    return curLocalIsoStr().substr(11, 8);
  }
  
  export function curLocalIsoStrWithTimezone() {
    return curLocalIsoStr() + localTimezoneStr();
  }
  
  export function localIsoDateStr2UtcMs(isoDateStr) {
    return new Date(`${isoDateStr}T00:00:00`).getTime();
  }
  
  export function localIsoDateStr2UtcMsEnd(isoDateStr) {
    return new Date(`${isoDateStr}T24:00:00`).getTime();
  }
  
  export function utcMs2LocalIsoStr(ms) {
    const msOffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
    return new Date(ms - msOffset).toISOString().slice(0, -1);
  }
  
  export function utcMs2LocalIsoDateStr(ms) {
    return utcMs2LocalIsoStr(ms).substr(0, 10);
  }
  
  export function utcMs2LocalIsoTimeStr(ms) {
    return utcMs2LocalIsoStr(ms).substr(11, 8);
  }
  
  export function utcMs2LocalIsoStrWithTimezone(ms) {
    return utcMs2LocalIsoStr(ms) + localTimezoneStr();
  }
  
  // Localization
  
  export function curLocaleStr() {
    return curLocalIsoStr().replace('T', ' ');
  }
  
  export function curLocaleDateStr() {
    // return new Date().toLocaleDateString();
    // if (i18n.locale === 'zh-hans') {
    //   return iso.replaceAll('-', '年');
    // }
    // return iso.replaceAll('-', '/');
    return curLocalIsoDateStr();
  }
  
  export function curLocaleTimeStr() {
    return curLocalIsoTimeStr();
  }
  
  export function localIsoStr2Locale(isoStr) {
    return isoStr;
  }
  
  export function localIsoDateStr2Locale(isoDateStr) {
    // if (i18n.locale === 'zh-hans') {
    //   return iso.replaceAll('-', '年');
    // }
    // return iso.replaceAll('-', '/');
    return isoDateStr;
  }
  
  export function localIsoTimeStr2Locale(isoTimeStr) {
    // return '';
  }
  
  export function utcMs2LocaleStr(ms) {
    const localIsoStr = utcMs2LocalIsoStr(ms);
    return `${localIsoStr.substr(0, 10)} ${localIsoStr.substr(11, 8)}`;
  }
  
  // Tests
  
  const win = (<any> window);
  win.myTest = (<any> {});
  
  const test = win.myTest;
  test.curLocalIsoStr = curLocalIsoStr;
  test.curLocalIsoStrWithTimezone = curLocalIsoStrWithTimezone;
  test.curLocaleTimeStr = curLocaleTimeStr;
  
  // import moment from 'moment';
  // import api from '../api';
  // import store from '../store/store';
  
  // export const DateFormat = {
  //   iso: moment.ISO_8601,
  //   day: 'YYYY-MM-DD',
  //   time: 'YYYY-MM-DD HH:mm:ss',
  //   serverTime: 'YYYY-MM-DDTHH:mm:ss',
  // };
  
  // /**
  //  * Refresh base time(generally from server).
  //  */
  // export async function refreshBaseTime() {
  //   const { data } = await api.get('/prime/robotics/server/time');
  //   // data is like below:
  //   // const data = {
  //   //   offsetDateTime: '2017-09-10T15:00:19.206+06:00',
  //   //   zoneOffset: '+06:00',
  //   // };
  //   store.commit('setBaseTime', data);
  // }
  
  // /**
  //  * Check if has base time.
  //  */
  // // export async function checkBaseTime() {
  // //   const hasBaseTime = !!store.state.baseTime.offsetDateTime;
  // //   if (hasBaseTime) {
  // //     timeDelta = Date.now() - getBaseTime().getTime();
  // //   } else {
  // //     await refreshBaseTime();
  // //   }
  // // }
  
  // /**
  //  * Time zone in base(generally is server time zone).
  //  * Default is +8, format like: 480 or "+08:00".
  //  * @returns {Number | String} Base time offset.
  //  */
  // export function timeOffset() {
  //   return store.state.time.base.zoneOffset;
  // }
  
  // /**
  //  * Date on now.
  //  * @returns {Date} Now date.
  //  */
  // export function now() {
  //   return store.getters.now();
  // }
  
  // /**
  //  * Day on now, like: '2019-02-23'.
  //  * @param returnFormat Format to return.
  //  * @returns {string} Day string to return.
  //  */
  // export function nowDay(returnFormat) {
  //   return moment(now()).format(returnFormat || DateFormat.day);
  // }
  
  
  // /**
  //  * Time on now, like: '2019-02-23 10:20:30'.
  //  * @param format Format to return.
  //  * @returns {string} Time string to return.
  //  */
  // export function nowTime(format) {
  //   return moment(now()).format(format || DateFormat.time);
  // }
  
  // /**
  //  * Get moment instance from DateFormat, use base time zone.
  //  * @param dateString Date string.
  //  * @param format Date string format.
  //  * @returns {moment.Moment}.
  //  */
  // export function toMoment(dateString, format) {
  //   return moment(dateString, format || DateFormat.iso, true).utcOffset(timeOffset(), true);
  // }
  
  // /**
  //  * Get moment parses and displays in local time. JS 将UTC时间转为本地时间
  //  * @param dateString Date string.
  //  * @param format Date string format.
  //  * @returns {parseZone}.
  //  */
  
  // export function dateFormatter(dateString, format) {
  //   return moment.parseZone(dateString).local().format(format);
  // }
  
  // /**
  //  * Get Date from DateFormat, use base time zone.
  //  * @param dateString Date string.
  //  * @param format Date string format.
  //  * @returns {Date}.
  //  */
  // export function toDate(dateString, format) {
  //   return toMoment(dateString, format).toDate();
  // }
  
  // /**
  //  * Format Date to date string.
  //  * Default is standard format(YYYY-MM-DD HH:mm:ss) in App, like: '2019-08-30 09:20:03'.
  //  * @param date.
  //  * @param returnFormat Date string format.
  //  * @returns {string}.
  //  */
  // export function formatDate(date, returnFormat) {
  //   if (!date) {
  //     return '';
  //   }
  //   return toMoment(date).format(returnFormat || DateFormat.time);
  // }
  
  // /**
  //  * Format Date to day string(YYYY-MM-DD), like: '2019-08-30'.
  //  * @param date.
  //  * @returns {string}.
  //  */
  // export function toDay(date) {
  //   return formatDate(date, DateFormat.day);
  // }
  
  // /**
  //  * Add days.
  //  * @param date Date to add.
  //  * @param amount Amount of days to add.
  //  * @param returnFormat Format to return. If none, return Date.
  //  * @returns {Date | String} Date after add.
  //  */
  // export function addDay(date, amount, returnFormat) {
  //   const newTime = toMoment(date).add(amount, 'day');
  //   if (returnFormat) {
  //     return newTime.format(returnFormat);
  //   }
  //   return newTime.toDate();
  // }
  
  // /**
  //  * start of days.
  //  * @param date date_selected.
  //  * @param returnFormat Format to return. If none, return Date.
  //  * @returns {Date | String} Date set 'xx-xx-xxT00:00:00'
  //  */
  // export function startOfDay(date, returnFormat) {
  //   const startDay = toMoment(date).startOf('day');
  //   if (returnFormat) {
  //     return startDay.format(returnFormat);
  //   }
  //   return startDay.toDate();
  // }
  
  // /**
  //  * end of days.
  //  * @param date date_selected.
  //  * @param returnFormat Format to return. If none, return Date.
  //  * @returns {Date | String} Date set 'xx-xx-xxT23:59:59'
  //  */
  // export function endOfDay(date, returnFormat) {
  //   const endDay = toMoment(date).endOf('day'); // toMoment(date).add(-1, 'day').endOf('day');
  //   if (returnFormat) {
  //     return endDay.format(returnFormat);
  //   }
  //   return endDay.toDate();
  // }
  // export function endAddOfDay(date, returnFormat) {
  //   const endDay = toMoment(date).endOf('day');
  //   if (returnFormat) {
  //     return endDay.format(returnFormat);
  //   }
  //   return endDay.toDate();
  // }
  
  // /**
  //  * Transform display duration to server DateRange.
  //  * @param duration Displayed duration for user, include from and to. Like: { from: 2019-09-01, to: 2019-09-02 }.
  //  * @returns {{from: String, to: String}} DateRange for server.
  //  * 取当天日期0点开始， 当天日期23:59:59结束
  //  */
  // export function toServerDateRange(duration) {
  //   if (!duration.to) {
  //     return {
  //       from: toMoment(duration.from).format(DateFormat.serverTime),
  //       to: endAddOfDay(duration.from, DateFormat.serverTime),
  //     };
  //   }
  //   return {
  //     from: startOfDay(duration.from, DateFormat.serverTime),
  //     to: endAddOfDay(duration.to, DateFormat.serverTime),
  //   };
  //   // return {
  //   //   from: toMoment(duration.from).format(DateFormat.serverTime),
  //   //   to: addDay(duration.to, 1, DateFormat.serverTime), // Add 1 day to transform to exact time
  //   // };
  // }
  