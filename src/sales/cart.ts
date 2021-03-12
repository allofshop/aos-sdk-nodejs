import * as lite from '../lite';

type CartItem = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
};

type CreateCartBody = {
  items: CartItem[];
};

type AddCartItemBody = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
};

type UpdateCartItemBody = {
  productVariantId?: string;
  optionValues?: string[];
  quanntity?: number;
};

type CheckoutCartBody = {
  cartItemIds: string[];
};

export async function createCart(body: CreateCartBody) {
  return await lite.request('POST', `carts`, { body });
}

export async function addCartItem(cartId: string, body: AddCartItemBody) {
  return await lite.request('POST', `carts/${cartId}/items`, { body });
}

export async function addDefaultCartItem(body: AddCartItemBody) {
  return await lite.request('POST', `carts/default/items`, { body });
}

export async function getCart(cartId: string) {
  return await lite.request('GET', `carts/${cartId}`);
}

export async function getDefaultCart() {
  return await lite.request('GET', `carts/default`);
}

export async function updateCartItem(
  cartId: string,
  carItemId: string,
  body: UpdateCartItemBody
) {
  return await lite.request('PATCH', `carts/${cartId}/items/${carItemId}`, {
    body,
  });
}

export async function updateDefaultCartItem(
  cartItemId: string,
  body: UpdateCartItemBody
) {
  return await lite.request('PATCH', `carts/default/items/${cartItemId}`, {
    body,
  });
}

export async function deleteCartItem(cartId: string, cartItemId: string) {
  return await lite.request('DELETE', `carts/${cartId}/items/${cartItemId}`);
}

export async function deleteDefaultCartItem(carItemId: string) {
  return await lite.request('DELETE', `carts/default/items/${carItemId}`);
}

export async function deleteCartItems(cartId: string) {
  return await lite.request('DELETE', `carts/${cartId}/items`);
}

export async function deleteDefaultCartItems() {
  return await lite.request('DELETE', `carts/default/items`);
}

export async function deleteCart(cartId: string) {
  return await lite.request('DELETE', `carts/${cartId}`);
}

export async function checkoutCart(cartId: string, body: CheckoutCartBody) {
  return await lite.request('POST', `carts/${cartId}/checkout`, { body });
}

export async function checkoutDefaultCart(body: CheckoutCartBody) {
  return await lite.request('POST', `carts/default/checkout`, { body });
}
