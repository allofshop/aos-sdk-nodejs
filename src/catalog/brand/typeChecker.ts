import { ObjectChecker, StringArrayChecker } from '~/base/typeChecker';

import { GetBrandsQuery } from './type';

export class GetQueryChecker {
  private objectChecker: ObjectChecker;
  private stringArrayChecker: StringArrayChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringArrayChecker = new StringArrayChecker();
  }

  public checkQuery(query: GetBrandsQuery, location: string) {
    this.objectChecker.check(query, location);
    if (query.ids !== undefined) {
      this.stringArrayChecker.check(query.ids, `${location}.ids`);
    }
    if (query.codes !== undefined) {
      this.stringArrayChecker.check(query.codes, `${location}.codes`);
    }
    if (query.names !== undefined) {
      this.stringArrayChecker.check(query.names, `${location}.names`);
    }
  }
}
