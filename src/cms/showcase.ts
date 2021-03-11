import * as lite from '../lite';

export async function getShowcase(slug: string) {
  await lite.request('GET', `showcases/${slug}`);
}

export async function getShowcases(query: any) {
  await lite.request('GET', 'showcases', { query });
}
