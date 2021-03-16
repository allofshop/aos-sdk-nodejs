import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

export async function getShowcase(slug: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(slug, 'slug');

  return await lite.request('GET', `showcases/${slug}`);
}

// TODO: 서버에서 query Dto가 비어있음
export async function getShowcases(query: any) {
  return await lite.request('GET', 'showcases', { query });
}
