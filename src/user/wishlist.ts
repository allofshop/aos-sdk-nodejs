import * as lite from '../lite';

type CreateWishlistBody = {
  name: string;
  description?: string;
  products: string[];
};

type AddWishlistProductBody = {
  productId: string;
};

type UpdateWishlistBody = {
  isDefault?: boolean;
  name?: string;
  description?: string;
};

type GetWishlistsQuery = {
  isDefault?: boolean;
};

export async function createUserWishlist(body: CreateWishlistBody) {
  await lite.request('POST', `users/me/wishlists`, { body });
}

export async function addUserWishlistProduct(
  wishlistId: string,
  body: AddWishlistProductBody
) {
  await lite.request('POST', `users/me/wishlists/${wishlistId}/products`, {
    body,
  });
}

export async function addUserDefaultWishlistProduct(
  body: AddWishlistProductBody
) {
  await lite.request('POST', `users/me/wishlists/default/products`, { body });
}

export async function getUserWistlists(query: GetWishlistsQuery) {
  await lite.request('GET', `users/me/wishlists`, { query });
}

export async function getUserWishlist(wishlistId: string) {
  await lite.request('GET', `users/me/wishlists/${wishlistId}`);
}

export async function getUserDefaultWishlist() {
  await lite.request('GET', `users/me/wishlists/default`);
}

export async function updateUserWishlist(
  wishlistId: string,
  body: UpdateWishlistBody
) {
  await lite.request('PATCH', `users/me/wishlists/${wishlistId}`, { body });
}

export async function updateUserDefaultWishlist(body: UpdateWishlistBody) {
  await lite.request('PATCH', `users/me/wishlists/default`, { body });
}

export async function deleteUserWishlist(wishlistId: string) {
  await lite.request('DELETE', `users/me/wishlists/${wishlistId}`);
}

export async function deleteUserWishlistProduct(
  wishlistId: string,
  productId: string
) {
  await lite.request(
    'DELETE',
    `users/me/wishlists/${wishlistId}/products/${productId}`
  );
}

export async function deleteUserDefaultWishlist() {
  await lite.request('DELETE', `users/me/wishlists/default`);
}

export async function deleteUserDefaultWishlistProduct(productId: string) {
  await lite.request(
    'DELETE',
    `users/me/wishlists/default/products/${productId}`
  );
}
