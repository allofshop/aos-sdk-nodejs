import * as lite from '../lite';

enum ArticleStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
}

enum ArticleSortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

enum ReputationScore {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

type ArticleAuthor = {
  displayName: string;
  password?: string;
};

type ComparableNumberQuery = {
  $gte?: number;
  $lte?: number;
  $gt?: number;
  $lt?: number;
};

type ComparableDateQuery = {
  $gte?: Date;
  $lte?: Date;
  $gt?: Date;
  $lt?: Date;
};

type ArticleSort = {
  createdAt?: ArticleSortType;
  index?: ArticleSortType;
};

type CreateArticleBody = {
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

type UpdateArticleBody = {
  title?: string;
  content?: string;
  author?: ArticleAuthor;
  isSecret?: boolean;
  attachmnets?: string[];
  featuredImage?: string;
  isNotice?: boolean;
  scheduleAt?: Date;
};

type GetArticlesQuery = {
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

type VoteArticleBody = {
  score: ReputationScore;
};

export async function createArticle(body: CreateArticleBody) {
  await lite.request('POST', 'articles', { body });
}

export async function getArticle(articleId: string) {
  await lite.request('GET', `articles/${articleId}`);
}

export async function updateArticle(
  articleId: string,
  body: UpdateArticleBody
) {
  await lite.request('PATCH', `articles/${articleId}`, { body });
}

export async function deleteArticle(articleId: string) {
  await lite.request('DELETE', `articles/${articleId}`);
}

export async function getArticles(query: GetArticlesQuery) {
  await lite.request('GET', 'articles', { query });
}

export async function voteArticle(articleId: string, body: VoteArticleBody) {
  await lite.request('POST', `articles/${articleId}/vote`, { body });
}

export async function cancelVoteArticle(articleId: string) {
  await lite.request('DELETE', `articles/${articleId}/vote`);
}
