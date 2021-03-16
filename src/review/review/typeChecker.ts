import {
  BooleanChecker,
  DateQueryChecker,
  NumberChecker,
  NumberQueryChecker,
  ObjectChecker,
  ReputationScoreChecker,
  SortQueryChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import {
  CreateReviewBody,
  GetReviewsQuery,
  UpdateReviewBody,
  VoteReviewBody,
} from './type';

export class CreateBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public check(body: CreateReviewBody, location: string) {
    this.objectChecker.check(body, location);

    this.stringChecker.check(body.orderItem, `${location}.orderItem`);
    this.stringChecker.check(body.content, `${location}.content`);
    this.numberChecker.check(body.score, `${location}.score`);

    if (body.images !== undefined) {
      this.stringArrayChecker.check(body.images, `${location}.images`);
    }
  }
}

export class UpdateBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public check(body: UpdateReviewBody, location: string) {
    this.objectChecker.check(body, location);

    if (body.content !== undefined) {
      this.stringChecker.check(body.content, `${location}.content`);
    }

    if (body.score !== undefined) {
      this.numberChecker.check(body.score, `${location}.score`);
    }

    if (body.images !== undefined) {
      this.stringArrayChecker.check(body.images, `${location}.images`);
    }
  }
}

export class GetQueryChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private numberQueryChecker: NumberQueryChecker;
  private booleanChecker: BooleanChecker;
  private dateQueryChecker: DateQueryChecker;
  private sortQueryChecker: SortQueryChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.numberQueryChecker = new NumberQueryChecker();
    this.booleanChecker = new BooleanChecker();
    this.dateQueryChecker = new DateQueryChecker();
    this.sortQueryChecker = new SortQueryChecker();
  }

  public check(query: GetReviewsQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.score !== undefined) {
      this.numberQueryChecker.check(query.score, `${location}.score`);
    }

    if (query.hasImage !== undefined) {
      this.booleanChecker.check(query.hasImage, `${location}.hasImage`);
    }

    if (query.productId !== undefined) {
      this.stringChecker.check(query.productId, `${location}.productId`);
    }

    if (query.productVariantId !== undefined) {
      this.stringChecker.check(
        query.productVariantId,
        `${location}.productVariantId`
      );
    }

    if (query.createdAt !== undefined) {
      this.dateQueryChecker.check(query.createdAt, `${location}.createdAt`);
    }

    if (query.content !== undefined) {
      this.stringChecker.check(query.content, `${location}.content`);
    }

    if (query.sort !== undefined) {
      this.sortQueryChecker.check(query.sort, `${location}.sort`);
    }
  }
}

export class VoteBodyChecker {
  private objectChecker: ObjectChecker;
  private reputationScoreChecker: ReputationScoreChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.reputationScoreChecker = new ReputationScoreChecker();
  }

  public check(body: VoteReviewBody, location: string) {
    this.objectChecker.check(body, location);
    this.reputationScoreChecker.check(body.type, `${location}.type`);
  }
}
