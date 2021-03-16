export type GetTreeCategoriesQuery = {
  parentId?: string;
  maximumLevel?: number;
};

export type GetCategoriesQuery = {
  parentId?: string;
  level?: string;
};
