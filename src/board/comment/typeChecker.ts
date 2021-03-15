import { ObjectChecker, StringChecker } from '~/base/typeChecker';

import {
  CommentAuthor,
  CreateCommentBody,
  GetCommentsQuery,
  UpdateCommentBody,
} from './type';

class AuthorChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
  }

  public check(author: CommentAuthor, location: string) {
    this.objectChecker.check(author, location);
    this.stringChecker.check(author.displayName, `${location}.displayName`);
    if (author.password !== undefined) {
      this.stringChecker.check(author.password, `${location}.password`);
    }
  }
}

export class CreateBodyChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;
  private authorChecker: AuthorChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
    this.authorChecker = new AuthorChecker();
  }

  public checkBody(body: CreateCommentBody, location: string) {
    this.objectChecker.check(body, location);

    this.authorChecker.check(body.author, `${location}.author`);
    this.stringChecker.check(body.content, `${location}.content`);
    if (body.parent !== undefined) {
      this.stringChecker.check(body.parent, `${location}.parent`);
    }
  }
}

export class UpdateBodyChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;
  private authorChecker: AuthorChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
    this.authorChecker = new AuthorChecker();
  }

  public checkBody(body: UpdateCommentBody, location: string) {
    this.objectChecker.check(body, location);

    if (body.author !== undefined) {
      this.authorChecker.check(body.author, `${location}.author`);
    }

    if (body.content !== undefined) {
      this.stringChecker.check(body.content, `${location}.content`);
    }
  }
}

export class GetQueryChecker {
  private stringChecker: StringChecker;
  private objectChecker: ObjectChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.objectChecker = new ObjectChecker();
  }

  public checkQuery(query: GetCommentsQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.content !== undefined) {
      this.stringChecker.check(query.content, `${location}.content`);
    }
  }
}
