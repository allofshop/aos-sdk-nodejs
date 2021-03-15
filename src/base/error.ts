export class BodyShouldBeObject extends Error {
  constructor() {
    super();
    this.message = 'Body should be object';
  }
}

export class QueryShouldBeObject extends Error {
  constructor() {
    super();
    this.message = 'Query should be object';
  }
}

export class ValueShouldBeString extends Error {
  location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be string`;
  }
}

export class ValueShouldBeObject extends Error {
  location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be object`;
  }
}

export class ValueShouldBeEnum extends Error {
  location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be enum`;
  }
}
