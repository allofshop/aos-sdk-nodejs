import * as lite from '../lite';

type GetTreeCategoriesQuery = {
  parentId?: string;
  maximumLevel?: number;
};

type GetCategoriesQuery = {
  parentId?: string;
  level?: string;
};

export async function getCategory(categoryId: string) {
  await lite.request('GET', `categories/${categoryId}`);
}

export async function getCategoryTree(query: GetTreeCategoriesQuery) {
  await lite.request('GET', `categories/tree`, { query });
}

export async function getCategories(query: GetCategoriesQuery) {
  await lite.request('GET', `categories`, { query });
}
