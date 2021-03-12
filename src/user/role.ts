import * as lite from '../lite';

export async function getUserRoles(query: any) {
  return await lite.request('GET', `users/me/roles`, { query });
}
