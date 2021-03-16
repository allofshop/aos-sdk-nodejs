import { DateQuery, NumberQuery } from '~/base/type';
import { SortType } from '~/base/vo';

import { ArticleStatus, ReputationScore } from './vo';

export type ArticleAuthor = {
  displayName: string;
  password?: string;
};

export type ArticleSort = {
  createdAt?: SortType;
  index?: SortType;
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
  index?: NumberQuery;
  createdAt?: DateQuery;
  boardCategoty?: string;
  sort?: ArticleSort;
};

export type VoteArticleBody = {
  score: ReputationScore;
};
