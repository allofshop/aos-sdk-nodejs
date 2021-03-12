import * as lite from '../lite';

export async function createUserCard(body: any) {
  return await lite.request('POST', `users/me/cards`, { body });
}

export async function getUserCard(cardId: string) {
  return await lite.request('GET', `users/me/cards/${cardId}`);
}

export async function getDefaultUserCard() {
  return await lite.request('GET', `users/me/cards/default`);
}

export async function deleteUserCard(cardId: string) {
  return await lite.request('DELETE', `users/me/cards/${cardId}`);
}

export async function getUserCards(query: any) {
  return await lite.request('GET', `users/me/cards`, { query });
}
