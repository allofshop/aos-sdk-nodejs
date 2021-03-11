import * as lite from '../lite';

enum SortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

enum ReputationScore {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

type Score = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type CreatedAt = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type ReviewSort = {
  createdAt?: SortType;
  reputationLike?: SortType;
  reputationDislike?: SortType;
  score?: SortType;
};

type CreateReviewBody = {
  orderItem: string;
  content: string;
  score: number;
  images?: string[];
};

type UpdateReviewBody = {
  content?: string;
  score?: number;
  images?: string[];
};

type GetReviewsQuery = {
  score?: Score;
  hasImage?: boolean;
  productId?: string;
  productVariantId?: string;
  createdAt?: CreatedAt;
  content?: string;
  sort?: ReviewSort;
};

type VoteReviewBody = {
  type: ReputationScore;
};

export async function createReview(body: CreateReviewBody) {
  await lite.request('POST', 'reviews', { body });
}

export async function getReview(reviewId: string) {
  await lite.request('GET', `reviews/${reviewId}`);
}

export async function updateReview(reviewId: string, body: UpdateReviewBody) {
  await lite.request('PATCH', `reviews/${reviewId}`, { body });
}

export async function deleteReview(reviewId: string) {
  await lite.request('DELETE', `reviews/${reviewId}`);
}

export async function getReviews(query: GetReviewsQuery) {
  await lite.request('GET', 'reviews', { query });
}

export async function voteReview(reviewId: string, body: VoteReviewBody) {
  await lite.request('POST', `reviews/${reviewId}/vote`, { body });
}

export async function cancelVoteReview(reviewId: string) {
  await lite.request('DELETE', `reviews/${reviewId}/vote`);
}
