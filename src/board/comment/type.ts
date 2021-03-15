export type CommentAuthor = {
  displayName: string;
  password?: string;
};

export type CreateCommentBody = {
  author: CommentAuthor;
  content: string;
  parent?: string;
};

export type UpdateCommentBody = {
  author?: CommentAuthor;
  content?: string;
};

export type GetCommentsQuery = {
  content?: string;
};
