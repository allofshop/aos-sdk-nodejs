import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { CreateCommentBody, GetCommentsQuery, UpdateCommentBody } from './type';
import {
  CreateBodyChecker,
  GetQueryChecker,
  UpdateBodyChecker,
} from './typeChecker';

export async function createComment(
  boardId: string,
  articleId: string,
  body: CreateCommentBody
) {
  const stringChecker = new StringChecker();
  stringChecker.check(boardId, 'boardId');
  stringChecker.check(articleId, 'articleId');

  const createBodyChecker = new CreateBodyChecker();
  createBodyChecker.checkBody(body, 'body');

  return await lite.request(
    'POST',
    `boards/${boardId}/articles/${articleId}/comments`,
    { body }
  );
}

export async function updateComment(
  boardId: string,
  articleId: string,
  commentId: string,
  body: UpdateCommentBody
) {
  const stringChecker = new StringChecker();
  stringChecker.check(boardId, 'boardId');
  stringChecker.check(articleId, 'articleId');
  stringChecker.check(commentId, 'commentId');

  const updateBodyChecker = new UpdateBodyChecker();
  updateBodyChecker.checkBody(body, 'body');

  return await lite.request(
    'PATCH',
    `boards/${boardId}/articles/${articleId}/comments/${commentId}`,
    { body }
  );
}

export async function deleteComment(
  boardId: string,
  articleId: string,
  commentId: string
) {
  const stringChecker = new StringChecker();
  stringChecker.check(boardId, 'boardId');
  stringChecker.check(articleId, 'articleId');
  stringChecker.check(commentId, 'commentId');

  return await lite.request(
    'DELETE',
    `boards/${boardId}/articles/${articleId}/comments/${commentId}`
  );
}

export async function getComments(
  boardId: string,
  articleId: string,
  query: GetCommentsQuery
) {
  const stringChecker = new StringChecker();
  stringChecker.check(boardId, 'boardId');
  stringChecker.check(articleId, 'articleId');

  const getQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request(
    'GET',
    `boards/${boardId}/articles/${articleId}/comments`,
    { query }
  );
}
