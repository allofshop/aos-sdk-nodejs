import { DateQuery, NumberQuery } from '~/base/type';
import { ReputationScore, SortType } from '~/base/vo';

export type ReviewSort = {
  createdAt?: SortType;
  reputationLike?: SortType;
  reputationDislike?: SortType;
  score?: SortType;
};

export type CreateReviewBody = {
  orderItem: string;
  content: string;
  score: number;
  images?: string[];
};

export type UpdateReviewBody = {
  content?: string;
  score?: number;
  images?: string[];
};

export type GetReviewsQuery = {
  score?: NumberQuery;
  hasImage?: boolean;
  productId?: string;
  productVariantId?: string;
  createdAt?: DateQuery;
  content?: string;
  sort?: ReviewSort;
};

export type VoteReviewBody = {
  type: ReputationScore;
};
