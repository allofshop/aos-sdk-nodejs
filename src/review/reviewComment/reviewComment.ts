import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { CreateReviewCommentBody, UpdateReviewCommentBody } from './type';
import { CreateBodyChecker, UpdateBodyChecker } from './typeChecker';

export async function createReviewComment(
  reviewId: string,
  body: CreateReviewCommentBody
) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  const createBodyChecker: CreateBodyChecker = new CreateBodyChecker();
  createBodyChecker.check(body, 'body');

  return await lite.request('POST', `reviews/${reviewId}/comments`, { body });
}

export async function getReviewComment(reviewId: string, commentId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');
  stringChecker.check(commentId, 'commentId');

  return await lite.request('GET', `reviews/${reviewId}/comments/${commentId}`);
}

export async function updateReviewComment(
  reviewId: string,
  commentId: string,
  body: UpdateReviewCommentBody
) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');
  stringChecker.check(commentId, 'commentId');

  const updateBodyChecker: UpdateBodyChecker = new UpdateBodyChecker();
  updateBodyChecker.check(body, 'body');

  return await lite.request(
    'PATCH',
    `reviews/${reviewId}/comments/${commentId}`,
    {
      body,
    }
  );
}

export async function deleteReviewComment(reviewId: string, commentId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');
  stringChecker.check(commentId, 'commentId');

  return await lite.request(
    'DELETE',
    `reviews/${reviewId}/comments/${commentId}`
  );
}

//TODO: 서버 Dto에서 query가 비어있음
export async function getReviewComments(reviewId: string, query: any) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(reviewId, 'reviewId');

  return await lite.request('GET', `reviews/${reviewId}/comments`, { query });
}
