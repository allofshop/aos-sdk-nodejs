import { ObjectChecker, StringChecker } from '~/base/typeChecker';

import { GetCouponQuery, IssueCouponBody } from './type';

export class GetQueryChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(query: GetCouponQuery, location: string) {
    this.objectChecker.check(query, location);
    this.stringChecker.check(query.input, `${location}.input`);
  }
}

export class IssueBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(body: IssueCouponBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringChecker.check(body.input, `${location}.input`);
  }
}
