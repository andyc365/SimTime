/* eslint-disable no-shadow */

export function localTimezoneStr() {
  const str = (new Date().getTimezoneOffset() / 60).toString();
  return str.includes('-') ? str.replace('-', '+') : `-${str}`;
}

export function curLocalIsoStr() {
  const msOffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
  return (new Date(Date.now() - msOffset)).toISOString().slice(0, -1);
}

export function tmrwLocalIsoStr() {
  const msOffset = new Date().getTimezoneOffset() * 60000; // offset in milliseconds
  return (new Date(Date.now() - msOffset + 3600 * 24 * 1000)).toISOString().slice(0, -1);
}

export function curLocalIsoDateStr() {
  return curLocalIsoStr().substr(0, 10);
}

export function tmrwLocalIsoDateStr() {
  return tmrwLocalIsoStr().substr(0, 10);
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

// Localization start ------------------------

export function curLocaleStr() {
  return curLocalIsoStr().replace('T', ' ');
}

export function curLocaleDateStr() {
  return curLocalIsoDateStr();
}

export function curLocaleTimeStr() {
  return curLocalIsoTimeStr();
}

export function localIsoStr2Locale(isoStr) {
  return isoStr;
}

export function localIsoDateStr2Locale(isoDateStr) {
  return isoDateStr;
}

export function localIsoTimeStr2Locale(isoTimeStr) {
  //
}

export function utcMs2LocaleStr(ms) {
  const localIsoStr = utcMs2LocalIsoStr(ms);
  return `${localIsoStr.substr(0, 10)} ${localIsoStr.substr(11, 8)}`;
}

export function utcMs2LocaleDateStr(ms) {
  return utcMs2LocalIsoDateStr(ms);
}

// Localization finish ------------------------


// Tests start ------------------------

const win = (<any> window);
win.myTest = (<any> {});

const test = win.myTest;
test.curLocalIsoStr = curLocalIsoStr;
test.curLocalIsoStrWithTimezone = curLocalIsoStrWithTimezone;
test.curLocaleTimeStr = curLocaleTimeStr;

// Tests finish ------------------------
