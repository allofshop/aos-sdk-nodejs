import { ValueShouldBeEnum } from '~/base/error';
import {
  BooleanChecker,
  DateChecker,
  DateQueryChecker,
  NumberQueryChecker,
  ObjectChecker,
  SortQueryChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import {
  ArticleAuthor,
  CreateArticleBody,
  GetArticlesQuery,
  UpdateArticleBody,
  VoteArticleBody,
} from './type';
import { ArticleStatus, ReputationScore } from './vo';

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
  private numberQueryChecker: NumberQueryChecker;
  private dateQueryChecker: DateQueryChecker;
  private sortQueryChecker: SortQueryChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.booleanChecker = new BooleanChecker();
    this.objectChecker = new ObjectChecker();
    this.numberQueryChecker = new NumberQueryChecker();
    this.dateQueryChecker = new DateQueryChecker();
    this.sortQueryChecker = new SortQueryChecker();
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
      this.numberQueryChecker.check(query.index, `${location}.index`);
    }

    if (query.createdAt !== undefined) {
      this.dateQueryChecker.check(query.createdAt, `${location}.createdAt`);
    }

    if (query.boardCategoty !== undefined) {
      this.stringChecker.check(
        query.boardCategoty,
        `${location}.boardCategoty`
      );
    }

    if (query.sort !== undefined) {
      this.sortQueryChecker.check(query.sort, `${location}.sort`);
    }
  }

  private checkStatus(status: ArticleStatus, location: string) {
    if (status !== ArticleStatus.DRAFT && status !== ArticleStatus.PUBLISHED) {
      throw new ValueShouldBeEnum(location);
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
