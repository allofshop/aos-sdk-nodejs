import * as lite from '../lite';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

type Name = {
  first: string;
  middle?: string;
  last: string;
};

type Phone = {
  number: string;
};

type UpdateUserBody = {
  birthdate?: Date;
  gender?: Gender;
  name?: Name;
  nickname?: string;
  phone?: Phone;
  avatar?: string;
};

type UpdatePasswordBody = {
  current: string;
  new: string;
};

type GetReviewWriteableOrderItemsQuery = {
  productName?: string;
};

export async function getUser() {
  await lite.request('GET', `users/me`);
}

export async function updateUser(body: UpdateUserBody) {
  await lite.request('PATCH', `users/me`, { body });
}

export async function deleteUser() {
  await lite.request('DELETE', `users/me`);
}

export async function updatePassword(body: UpdatePasswordBody) {
  await lite.request('POST', `users/me/changePassword`, { body });
}

export async function getReviewWriteableOrderItems(
  query: GetReviewWriteableOrderItemsQuery
) {
  await lite.request('GET', `users/me/orderItems/getReviewWriteableList`, {
    query,
  });
}
