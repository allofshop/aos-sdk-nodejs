import {
  NumberChecker,
  ObjectChecker,
  StringChecker,
} from '~/base/typeChecker';

import { GetCategoriesQuery, GetTreeCategoriesQuery } from './type';

export class GetTreeQueryChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.numberChecker = new NumberChecker();
  }

  public checkQuery(query: GetTreeCategoriesQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.parentId !== undefined) {
      this.stringChecker.check(query.parentId, `${location}.parentId`);
    }

    if (query.maximumLevel !== undefined) {
      this.numberChecker.check(query.maximumLevel, `${location}.maximumLevel`);
    }
  }
}

export class GetQueryChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public checkQuery(query: GetCategoriesQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.parentId !== undefined) {
      this.stringChecker.check(query.parentId, `${location}.parentId`);
    }

    if (query.level !== undefined) {
      this.stringChecker.check(query.level, `${location}.level`);
    }
  }
}
