import { ArticleSortType, ArticleStatus, ReputationScore } from './vo';

export type ArticleAuthor = {
  displayName: string;
  password?: string;
};

export type ComparableNumberQuery = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

export type ComparableDateQuery = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

export type ArticleSort = {
  createdAt?: ArticleSortType;
  index?: ArticleSortType;
};

export type CreateArticleBody = {
  boardId?: string;
  boardSlug?: string;
  title: string;
  content: string;
  author: ArticleAuthor;
  isSecret?: boolean;
  attachments?: string[];
  featuredImage?: string;
  isNotice?: boolean;
  status?: ArticleStatus;
  scheduledAt?: Date;
  parent?: string;
};

export type UpdateArticleBody = {
  title?: string;
  content?: string;
  author?: ArticleAuthor;
  isSecret?: boolean;
  attachmnets?: string[];
  featuredImage?: string;
  isNotice?: boolean;
  scheduleAt?: Date;
};

export type GetArticlesQuery = {
  title?: string;
  content?: string;
  boardSlug?: string;
  boardId?: string;
  authorDisplayName?: string;
  authorUserId?: string;
  isSecret?: boolean;
  status?: ArticleStatus;
  index?: ComparableNumberQuery;
  createdAt?: ComparableDateQuery;
  boardCategoty?: string;
  sort?: ArticleSort;
};

export type VoteArticleBody = {
  score: ReputationScore;
};
