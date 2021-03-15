import {
  ValueShouldBeArray,
  ValueShouldBeBoolean,
  ValueShouldBeDate,
  ValueShouldBeNumber,
  ValueShouldBeObject,
  ValueShouldBeString,
} from './error';

export class StringChecker {
  public check(value: string, location: string) {
    if (typeof value !== 'string') {
      throw new ValueShouldBeString(location);
    }
  }
}

export class BooleanChecker {
  public check(value: boolean, location: string) {
    if (typeof value !== 'boolean') {
      throw new ValueShouldBeBoolean(location);
    }
  }
}

export class StringArrayChecker {
  private stringChecker: StringChecker;
  constructor() {
    this.stringChecker = new StringChecker();
  }

  public check(value: string[], location: string) {
    if (typeof value !== 'object' || value.length === undefined) {
      throw new ValueShouldBeArray(location);
    }

    value.map((am) => {
      this.stringChecker.check(am, location);
    });
  }
}

export class DateChecker {
  public check(value: Date, location: string) {
    if (value instanceof Date) {
      throw new ValueShouldBeDate(location);
    }
  }
}

export class ObjectChecker {
  public check(value: Record<string, unknown>, location: string) {
    if (typeof value !== 'object') {
      throw new ValueShouldBeObject(location);
    }
  }
}

export class NumberChecker {
  public check(value: number, location: string) {
    if (typeof value !== 'number') {
      throw new ValueShouldBeNumber(location);
    }
  }
}
