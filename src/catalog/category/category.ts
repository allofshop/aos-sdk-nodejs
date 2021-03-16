import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { GetCategoriesQuery, GetTreeCategoriesQuery } from './type';
import { GetQueryChecker, GetTreeQueryChecker } from './typeChecker';

export async function getCategory(categoryId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(categoryId, 'categoryId');

  return await lite.request('GET', `categories/${categoryId}`);
}

export async function getCategoryTree(query: GetTreeCategoriesQuery) {
  const getTreeQueryChecker: GetTreeQueryChecker = new GetTreeQueryChecker();
  getTreeQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', `categories/tree`, { query });
}

export async function getCategories(query: GetCategoriesQuery) {
  const getQueryChecker: GetQueryChecker = new GetQueryChecker();
  getQueryChecker.checkQuery(query, 'query');

  return await lite.request('GET', `categories`, { query });
}
