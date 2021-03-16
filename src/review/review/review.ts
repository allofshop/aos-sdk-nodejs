import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import {
  CreateReviewBody,
  GetReviewsQuery,
  UpdateReviewBody,
  VoteReviewBody,
} from './type';
import {
  CreateBodyChecker,
  GetQueryChecker,
  UpdateBodyChecker,
  VoteBodyChecker,
} from './typeChecker';

export async function createReview(body: CreateReviewBody) {
  const createBodyChecker: CreateBodyChecker = new CreateBodyChecker();
  createBodyChecker.check(body, 'body');

  return await lite.request('POST', 'reviews', { body });
}

export async function getReview(reviewId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  return await lite.request('GET', `reviews/${reviewId}`);
}

export async function updateReview(reviewId: string, body: UpdateReviewBody) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  const updateBodyChecker: UpdateBodyChecker = new UpdateBodyChecker();
  updateBodyChecker.check(body, 'body');

  return await lite.request('PATCH', `reviews/${reviewId}`, { body });
}

export async function deleteReview(reviewId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  return await lite.request('DELETE', `reviews/${reviewId}`);
}

export async function getReviews(query: GetReviewsQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.check(query, 'query');

  return await lite.request('GET', 'reviews', { query });
}

export async function voteReview(reviewId: string, body: VoteReviewBody) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  const voteBodyChecker: VoteBodyChecker = new VoteBodyChecker();
  voteBodyChecker.check(body, 'body');

  return await lite.request('POST', `reviews/${reviewId}/vote`, { body });
}

export async function cancelVoteReview(reviewId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  return await lite.request('DELETE', `reviews/${reviewId}/vote`);
}
