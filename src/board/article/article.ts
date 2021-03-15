import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import {
  CreateArticleBody,
  GetArticlesQuery,
  UpdateArticleBody,
  VoteArticleBody,
} from './type';
import {
  CreateBodyChecker,
  GetQueryChecker,
  UpdateBodyChecker,
  VoteBodyChecker,
} from './typeChecker';

export async function createArticle(body: CreateArticleBody) {
  const createBodyChecker: CreateBodyChecker = new CreateBodyChecker();
  createBodyChecker.checkBody(body, 'body');

  return await lite.request('POST', 'articles', { body });
}

export async function getArticle(articleId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(articleId, 'articleId');

  return await lite.request('GET', `articles/${articleId}`);
}

export async function updateArticle(
  articleId: string,
  body: UpdateArticleBody
) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(articleId, 'articleId');

  const updateBodyChecker: UpdateBodyChecker = new UpdateBodyChecker();
  updateBodyChecker.checkBody(body, 'body');

  return await lite.request('PATCH', `articles/${articleId}`, { body });
}

export async function deleteArticle(articleId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(articleId, 'articleId');

  return await lite.request('DELETE', `articles/${articleId}`);
}

export async function getArticles(query: GetArticlesQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', 'articles', { query });
}

export async function voteArticle(articleId: string, body: VoteArticleBody) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(articleId, 'articleId');

  const voteBodyChecker: VoteBodyChecker = new VoteBodyChecker();
  voteBodyChecker.checkBody(body, 'body');

  return await lite.request('POST', `articles/${articleId}/vote`, { body });
}

export async function cancelVoteArticle(articleId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(articleId, 'articleId');

  return await lite.request('DELETE', `articles/${articleId}/vote`);
}
