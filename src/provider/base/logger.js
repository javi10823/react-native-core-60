// @flow

export const LogLevels = {
  LOG: 'log',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

export default class Logger {
  _name: string;

  _printTimestamp: boolean;

  _console: *;

  constructor(name: string = 'main', printTimestamp: boolean = false) {
    this._name = name;
    this._printTimestamp = !!printTimestamp;
    this._console = console;
  }

  log(...args: Object): Function {
    return this._log(LogLevels.LOG, ...args);
  }

  info(...args: Object): Function {
    return this._log(LogLevels.INFO, ...args);
  }

  warn(...args: Object): Function {
    return this._log(LogLevels.WARN, ...args);
  }

  error(...args: Object): Function {
    return this._log(LogLevels.ERROR, ...args);
  }

  setPrintTimestamp(val: boolean = true): * {
    this._printTimestamp = !!val;
    return this;
  }

  _log(level: string = LogLevels.INFO, ...args: Object): * {
    const ts = this._printTimestamp ? `${+new Date()} ` : '';
    try {
      this._console[level](`[${this._name}] ${ts}${level}:`, ...args);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }
    return this;
  }
}
