import * as lite from '../lite';

export async function getShowcase(slug: string) {
  return await lite.request('GET', `showcases/${slug}`);
}

export async function getShowcases(query: any) {
  return await lite.request('GET', 'showcases', { query });
}
