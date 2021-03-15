import {
  BooleanChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import { GetBoardsQuery } from './type';

export class GetQueryChecker {
  private booleanChecker: BooleanChecker;
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private objectChecker: ObjectChecker;

  constructor() {
    this.booleanChecker = new BooleanChecker();
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.objectChecker = new ObjectChecker();
  }

  public checkQuery(query: GetBoardsQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.displayable !== undefined) {
      this.booleanChecker.check(query.displayable, `${location}.displayable`);
    }

    if (query.categories !== undefined) {
      this.stringArrayChecker.check(query.categories, `${location}.categories`);
    }

    if (query.slug !== undefined) {
      this.stringChecker.check(query.slug, `${location}.slug`);
    }

    if (query.name !== undefined) {
      this.stringChecker.check(query.name, `${location}.name`);
    }
  }
}
