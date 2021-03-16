import {
  ValueShouldBeArray,
  ValueShouldBeBoolean,
  ValueShouldBeDate,
  ValueShouldBeEnum,
  ValueShouldBeNumber,
  ValueShouldBeObject,
  ValueShouldBeString,
} from './error';
import { DateQuery, NumberQuery } from './type';
import { SortType } from './vo';

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

export class NumberQueryChecker {
  private objectChecker: ObjectChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.numberChecker = new NumberChecker();
  }

  public check(query: NumberQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.$gt !== undefined) {
      this.numberChecker.check(query.$gt, `${location}.$gt`);
    }

    if (query.$gte !== undefined) {
      this.numberChecker.check(query.$gte, `${location}.$gte`);
    }

    if (query.$lt !== undefined) {
      this.numberChecker.check(query.$lt, `${location}.$lt`);
    }

    if (query.$lte !== undefined) {
      this.numberChecker.check(query.$lte, `${location}.$lte`);
    }
  }
}

export class DateQueryChecker {
  private objectChecker: ObjectChecker;
  private dateChecker: DateChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.dateChecker = new DateChecker();
  }

  public check(query: DateQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.$gt !== undefined) {
      this.dateChecker.check(query.$gt, `${location}.$gt`);
    }

    if (query.$gte !== undefined) {
      this.dateChecker.check(query.$gte, `${location}.$gte`);
    }

    if (query.$lt !== undefined) {
      this.dateChecker.check(query.$lt, `${location}.$lt`);
    }

    if (query.$lte !== undefined) {
      this.dateChecker.check(query.$lte, `${location}.$lte`);
    }
  }
}

export class SortQueryChecker {
  private objectChecker: ObjectChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
  }

  public check(query: Record<string, SortType>, location: string) {
    this.objectChecker.check(query, location);

    for (const property in query) {
      if (
        query[property] !== SortType.ASC &&
        query[property] !== SortType.DESC
      ) {
        throw new ValueShouldBeEnum(`${location}.${property}`);
      }
    }
  }
}
