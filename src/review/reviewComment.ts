import * as lite from '../lite';

type CreateReviewCommentBody = {
  content: string;
};

type UpdateReviewCommentBody = {
  content: string;
};

export async function createReviewComment(
  reviewId: string,
  body: CreateReviewCommentBody
) {
  return await lite.request('POST', `reviews/${reviewId}/comments`, { body });
}

export async function getReviewComment(reviewId: string, commentId: string) {
  return await lite.request('GET', `reviews/${reviewId}/comments/${commentId}`);
}

export async function updateReviewComment(
  reviewId: string,
  commentId: string,
  body: UpdateReviewCommentBody
) {
  return await lite.request(
    'PATCH',
    `reviews/${reviewId}/comments/${commentId}`,
    {
      body,
    }
  );
}

export async function deleteReviewComment(reviewId: string, commentId: string) {
  return await lite.request(
    'DELETE',
    `reviews/${reviewId}/comments/${commentId}`
  );
}

export async function getReviewComments(reviewId: string, query: any) {
  return await lite.request('GET', `reviews/${reviewId}/comments`, { query });
}
