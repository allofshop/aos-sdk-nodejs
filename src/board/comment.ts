import * as lite from '../lite';

type CommentAuthor = {
  displayName: string;
  password?: string;
};

type CreateCommentBody = {
  author: CommentAuthor;
  content: string;
  parent?: string;
};

type UpdateCommentBody = {
  author?: CommentAuthor;
  content?: string;
};

type GetCommentsQuery = {
  content?: string;
};

export async function createComment(
  boardId: string,
  articleId: string,
  body: CreateCommentBody
) {
  await lite.request(
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
  await lite.request(
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
  await lite.request(
    'DELETE',
    `boards/${boardId}/articles/${articleId}/comments/${commentId}`
  );
}

export async function getComments(
  boardId: string,
  articleId: string,
  query: GetCommentsQuery
) {
  await lite.request(
    'GET',
    `boards/${boardId}/articles/${articleId}/comments`,
    { query }
  );
}
