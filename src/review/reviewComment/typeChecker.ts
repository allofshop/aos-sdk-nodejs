import { ObjectChecker, StringChecker } from '~/base/typeChecker';

import { CreateReviewCommentBody, UpdateReviewCommentBody } from './type';

export class CreateBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(body: CreateReviewCommentBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringChecker.check(body.content, `${location}.content`);
  }
}

export class UpdateBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(body: UpdateReviewCommentBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringChecker.check(body.content, `${location}.content`);
  }
}
