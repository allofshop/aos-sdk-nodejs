import { ObjectChecker, StringChecker } from '~/base/typeChecker';

import { GetBannersQuery } from './type';

export class GetQueryChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public checkQuery(query: GetBannersQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.code !== undefined) {
      this.stringChecker.check(query.code, `${location}.code`);
    }
  }
}
