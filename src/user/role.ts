import * as lite from '../lite';

export async function getUserRoles(query: any) {
  await lite.request('GET', `users/me/roles`, { query });
}
