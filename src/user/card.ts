import * as lite from '../lite';

export async function createUserCard(body: any) {
  await lite.request('POST', `users/me/cards`, { body });
}

export async function getUserCard(cardId: string) {
  await lite.request('GET', `users/me/cards/${cardId}`);
}

export async function getDefaultUserCard() {
  await lite.request('GET', `users/me/cards/default`);
}

export async function deleteUserCard(cardId: string) {
  await lite.request('DELETE', `users/me/cards/${cardId}`);
}

export async function getUserCards(query: any) {
  await lite.request('GET', `users/me/cards`, { query });
}
