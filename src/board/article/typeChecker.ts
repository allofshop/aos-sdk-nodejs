import { ValueShouldBeEnum } from '~/base/error';
import {
  BooleanChecker,
  DateChecker,
  NumberChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import {
  ArticleAuthor,
  ArticleSort,
  ComparableDateQuery,
  ComparableNumberQuery,
  CreateArticleBody,
  GetArticlesQuery,
  UpdateArticleBody,
  VoteArticleBody,
} from './type';
import { ArticleSortType, ArticleStatus, ReputationScore } from './vo';

class AuthorChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(author: ArticleAuthor, location: string) {
    this.objectChecker.check(author, location);
    this.stringChecker.check(author.displayName, `${location}.displayName`);
    if (author.password !== undefined) {
      this.stringChecker.check(author.password, `${location}.password`);
    }
  }
}

export class CreateBodyChecker {
  private stringChecker: StringChecker;
  private booleanChecker: BooleanChecker;
  private stringArrayChecker: StringArrayChecker;
  private dateChecker: DateChecker;
  private objectChecker: ObjectChecker;
  private authorChecker: AuthorChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.booleanChecker = new BooleanChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.dateChecker = new DateChecker();
    this.objectChecker = new ObjectChecker();
    this.authorChecker = new AuthorChecker();
  }

  public checkBody(body: CreateArticleBody, location: string) {
    this.objectChecker.check(body, location);

    if (body.boardId !== undefined) {
      this.stringChecker.check(body.boardId, `${location}.boardId`);
    }

    if (body.boardSlug !== undefined) {
      this.stringChecker.check(body.boardSlug, `${location}.boardSlug`);
    }

    this.stringChecker.check(body.title, `${location}.title`);
    this.stringChecker.check(body.content, `${location}.content`);
    this.authorChecker.check(body.author, `${location}.author`);

    if (body.isSecret !== undefined) {
      this.booleanChecker.check(body.isSecret, `${location}.isSecret`);
    }

    if (body.attachments !== undefined) {
      this.stringArrayChecker.check(
        body.attachments,
        `${location}.attachments`
      );
    }

    if (body.featuredImage !== undefined) {
      this.stringChecker.check(body.featuredImage, `${location}.featuredImage`);
    }

    if (body.isNotice !== undefined) {
      this.booleanChecker.check(body.isNotice, `${location}.isNotice`);
    }

    if (body.status !== undefined) {
      this.checkStatus(body.status, `${location}.status`);
    }

    if (body.scheduledAt !== undefined) {
      this.dateChecker.check(body.scheduledAt, `${location}.scheduledAt`);
    }

    if (body.parent !== undefined) {
      this.stringChecker.check(body.parent, `${location}.parent`);
    }
  }

  private checkStatus(status: ArticleStatus, location: string) {
    if (status !== ArticleStatus.DRAFT && status !== ArticleStatus.PUBLISHED) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class UpdateBodyChecker {
  private stringChecker: StringChecker;
  private booleanChecker: BooleanChecker;
  private stringArrayChecker: StringArrayChecker;
  private dateChecker: DateChecker;
  private authorChecker: AuthorChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.booleanChecker = new BooleanChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.dateChecker = new DateChecker();
    this.authorChecker = new AuthorChecker();
  }

  public checkBody(body: UpdateArticleBody, location: string) {
    if (body.title !== undefined) {
      this.stringChecker.check(body.title, `${location}.title`);
    }

    if (body.content !== undefined) {
      this.stringChecker.check(body.content, `${location}.content`);
    }

    if (body.author !== undefined) {
      this.authorChecker.check(body.author, `${location}.author`);
    }

    if (body.isSecret !== undefined) {
      this.booleanChecker.check(body.isSecret, `${location}.isSecret`);
    }

    if (body.attachmnets !== undefined) {
      this.stringArrayChecker.check(
        body.attachmnets,
        `${location}.attachmnets`
      );
    }

    if (body.featuredImage !== undefined) {
      this.stringChecker.check(body.featuredImage, `${location}.featuredImage`);
    }

    if (body.isNotice !== undefined) {
      this.booleanChecker.check(body.isNotice, `${location}.isNotice`);
    }

    if (body.scheduleAt !== undefined) {
      this.dateChecker.check(body.scheduleAt, `${location}.scheduleAt`);
    }
  }
}

export class GetQueryChecker {
  private stringChecker: StringChecker;
  private booleanChecker: BooleanChecker;
  private objectChecker: ObjectChecker;
  private numberChecker: NumberChecker;
  private dateChekcer: DateChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.booleanChecker = new BooleanChecker();
    this.objectChecker = new ObjectChecker();
    this.numberChecker = new NumberChecker();
    this.dateChekcer = new DateChecker();
  }

  public checkQuery(query: GetArticlesQuery, location: string) {
    if (query.title !== undefined) {
      this.stringChecker.check(query.title, `${location}.title`);
    }

    if (query.content !== undefined) {
      this.stringChecker.check(query.content, `${location}.content`);
    }

    if (query.boardSlug !== undefined) {
      this.stringChecker.check(query.boardSlug, `${location}.boardSlug`);
    }

    if (query.boardId !== undefined) {
      this.stringChecker.check(query.boardId, `${location}.boardId`);
    }

    if (query.authorDisplayName !== undefined) {
      this.stringChecker.check(
        query.authorDisplayName,
        'query.authorDisplayName'
      );
    }

    if (query.authorUserId !== undefined) {
      this.stringChecker.check(query.authorUserId, `${location}.authorUserId`);
    }

    if (query.isSecret !== undefined) {
      this.booleanChecker.check(query.isSecret, `${location}.isSecret`);
    }

    if (query.status !== undefined) {
      this.checkStatus(query.status, `${location}.status`);
    }

    if (query.index !== undefined) {
      this.checkNumberQuery(query.index, `${location}.index`);
    }

    if (query.createdAt !== undefined) {
      this.checkDateQuery(query.createdAt, `${location}.createdAt`);
    }

    if (query.boardCategoty !== undefined) {
      this.stringChecker.check(
        query.boardCategoty,
        `${location}.boardCategoty`
      );
    }

    if (query.sort !== undefined) {
      this.checkSort(query.sort, `${location}.sort`);
    }
  }

  private checkStatus(status: ArticleStatus, location: string) {
    if (status !== ArticleStatus.DRAFT && status !== ArticleStatus.PUBLISHED) {
      throw new ValueShouldBeEnum(location);
    }
  }

  private checkNumberQuery(
    numberQuery: ComparableNumberQuery,
    location: string
  ) {
    this.objectChecker.check(numberQuery, 'numberQuery');

    if (numberQuery.$gt !== undefined) {
      this.numberChecker.check(numberQuery.$gt, `${location}.$gt`);
    }

    if (numberQuery.$gte !== undefined) {
      this.numberChecker.check(numberQuery.$gte, `${location}.$gte`);
    }

    if (numberQuery.$lt !== undefined) {
      this.numberChecker.check(numberQuery.$lt, `${location}.$lt`);
    }

    if (numberQuery.$lte !== undefined) {
      this.numberChecker.check(numberQuery.$lte, `${location}.$lte`);
    }
  }

  private checkDateQuery(dateQuery: ComparableDateQuery, location: string) {
    this.objectChecker.check(dateQuery, 'dateQuery');

    if (dateQuery.$gt !== undefined) {
      this.dateChekcer.check(dateQuery.$gt, `${location}.$gt`);
    }

    if (dateQuery.$gte !== undefined) {
      this.dateChekcer.check(dateQuery.$gte, `${location}.$gte`);
    }

    if (dateQuery.$lt !== undefined) {
      this.dateChekcer.check(dateQuery.$lt, `${location}.$lt`);
    }

    if (dateQuery.$lte !== undefined) {
      this.dateChekcer.check(dateQuery.$lte, `${location}.$lte`);
    }
  }

  private checkSort(sort: ArticleSort, location: string) {
    this.objectChecker.check(sort, 'sort');

    if (sort.createdAt !== undefined) {
      if (
        sort.createdAt !== ArticleSortType.ASC &&
        sort.createdAt !== ArticleSortType.DESC
      ) {
        throw new ValueShouldBeEnum(`${location}.createdAt`);
      }
      if (
        sort.index !== ArticleSortType.ASC &&
        sort.index !== ArticleSortType.DESC
      ) {
        throw new ValueShouldBeEnum(`${location}.index`);
      }
    }
  }
}

export class VoteBodyChecker {
  private objectChecker: ObjectChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
  }

  public checkBody(body: VoteArticleBody, location: string) {
    this.objectChecker.check(body, location);

    this.checkScore(body.score, `${location}.score`);
  }

  private checkScore(score: ReputationScore, location: string) {
    if (score !== ReputationScore.LIKE && score !== ReputationScore.DISLIKE) {
      throw new ValueShouldBeEnum(location);
    }
  }
}
