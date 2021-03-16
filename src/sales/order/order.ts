import { StringChecker } from '~/base/typeChecker';
import * as lite from '~/lite';

import { CreateDto, UpdateItemByIdDto, UpdateOneByIdDto } from './type';
import {
  CreateValidator,
  UpdateItemByIdValidator,
  UpdateOneByIdValidator,
} from './validator';

export async function createOrder(body: CreateDto) {
  const createBodyValidator: CreateValidator = new CreateValidator();
  createBodyValidator.validate(body, 'body');

  return await lite.request('POST', `orders`, { body });
}

export async function getOrder(orderId: string) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(orderId, 'orderId');

  return await lite.request('GET', `orders/${orderId}`);
}

export async function updateOrder(orderId: string, body: UpdateOneByIdDto) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(orderId, 'orderId');

  const updateBodyValidator: UpdateOneByIdValidator = new UpdateOneByIdValidator();
  updateBodyValidator.validate(body, 'body');

  return await lite.request('PATCH', `orders/${orderId}`, { body });
}

export async function updateOrderItem(
  orderId: string,
  orderItemId: string,
  body: UpdateItemByIdDto
) {
  const stringChecker: StringChecker = new StringChecker();
  stringChecker.check(orderId, 'orderId');
  stringChecker.check(orderItemId, 'orderItemId');

  const updateItemBodyValidator: UpdateItemByIdValidator = new UpdateItemByIdValidator();
  updateItemBodyValidator.validate(body, 'body');

  return await lite.request(
    'PATCH',
    `orders/${orderId}/orderItems/${orderItemId}`,
    {
      body,
    }
  );
}

export async function deleteOrderItem(orderId: string, orderItemId: string) {
  return await lite.request(
    'DELETE',
    `orders/${orderId}/orderItems/${orderItemId}`
  );
}

export async function checkoutOrder(orderId: string, body: CheckoutOrderBody) {
  return await lite.request('POST', `orders/${orderId}/checkout`, { body });
}

export async function doneOrder(orderId: string, body: DoneOrderBody) {
  return await lite.request('POST', `orders/${orderId}/done`, { body });
}
