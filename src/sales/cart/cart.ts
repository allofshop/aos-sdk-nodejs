import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import {
  AddCartItemBody,
  CheckoutCartBody,
  CreateCartBody,
  UpdateCartItemBody,
} from './type';
import {
  AddItemBodyChecker,
  CheckoutBodyChecker,
  CreateBodyChecker,
  UpdateBodyChecker,
} from './typeChecker';

export async function createCart(body: CreateCartBody) {
  const createBodyChecker: CreateBodyChecker = new CreateBodyChecker();
  createBodyChecker.check(body, 'body');

  return await lite.request('POST', `carts`, { body });
}

export async function addCartItem(cartId: string, body: AddCartItemBody) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');

  const addItemBodyChecker: AddItemBodyChecker = new AddItemBodyChecker();
  addItemBodyChecker.check(body, 'body');

  return await lite.request('POST', `carts/${cartId}/items`, { body });
}

export async function addDefaultCartItem(body: AddCartItemBody) {
  const addItemBodyChecker: AddItemBodyChecker = new AddItemBodyChecker();
  addItemBodyChecker.check(body, 'body');

  return await lite.request('POST', `carts/default/items`, { body });
}

export async function getCart(cartId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');

  return await lite.request('GET', `carts/${cartId}`);
}

export async function getDefaultCart() {
  return await lite.request('GET', `carts/default`);
}

export async function updateCartItem(
  cartId: string,
  cartItemId: string,
  body: UpdateCartItemBody
) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');
  stringChecker.check(cartItemId, 'cartItemId');

  const updateBodyChecker: UpdateBodyChecker = new UpdateBodyChecker();
  updateBodyChecker.check(body, 'body');

  return await lite.request('PATCH', `carts/${cartId}/items/${cartItemId}`, {
    body,
  });
}

export async function updateDefaultCartItem(
  cartItemId: string,
  body: UpdateCartItemBody
) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartItemId, 'cartItemId');

  const updateBodyChecker: UpdateBodyChecker = new UpdateBodyChecker();
  updateBodyChecker.check(body, 'body');

  return await lite.request('PATCH', `carts/default/items/${cartItemId}`, {
    body,
  });
}

export async function deleteCartItem(cartId: string, cartItemId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');
  stringChecker.check(cartItemId, 'cartItemId');

  return await lite.request('DELETE', `carts/${cartId}/items/${cartItemId}`);
}

export async function deleteDefaultCartItem(cartItemId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartItemId, 'cartItemId');

  return await lite.request('DELETE', `carts/default/items/${cartItemId}`);
}

export async function deleteCartItems(cartId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');

  return await lite.request('DELETE', `carts/${cartId}/items`);
}

export async function deleteDefaultCartItems() {
  return await lite.request('DELETE', `carts/default/items`);
}

export async function deleteCart(cartId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');

  return await lite.request('DELETE', `carts/${cartId}`);
}

export async function checkoutCart(cartId: string, body: CheckoutCartBody) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(cartId, 'cartId');

  const checkBodyChecker: CheckoutBodyChecker = new CheckoutBodyChecker();
  checkBodyChecker.check(body, 'body');

  return await lite.request('POST', `carts/${cartId}/checkout`, { body });
}

export async function checkoutDefaultCart(body: CheckoutCartBody) {
  const checkBodyChecker: CheckoutBodyChecker = new CheckoutBodyChecker();
  checkBodyChecker.check(body, 'body');

  return await lite.request('POST', `carts/default/checkout`, { body });
}
