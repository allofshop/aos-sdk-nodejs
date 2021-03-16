import {
  BooleanChecker,
  DateQueryChecker,
  NumberQueryChecker,
  ObjectChecker,
  SortQueryChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import { GetVendorsQuery } from './type';

export class GetQueryChecker {
  private stringChecker: StringChecker;
  private booleanChecker: BooleanChecker;
  private objectChecker: ObjectChecker;
  private numberQueryChecker: NumberQueryChecker;
  private dateQueryChecker: DateQueryChecker;
  private sortQueryChecker: SortQueryChecker;
  private stringArrayChecker: StringArrayChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.booleanChecker = new BooleanChecker();
    this.objectChecker = new ObjectChecker();
    this.numberQueryChecker = new NumberQueryChecker();
    this.dateQueryChecker = new DateQueryChecker();
    this.sortQueryChecker = new SortQueryChecker();
    this.stringArrayChecker = new StringArrayChecker();
  }

  public checkQuery(query: GetVendorsQuery, location: string) {
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
