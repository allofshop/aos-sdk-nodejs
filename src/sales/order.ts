import * as lite from '../lite';

enum PaymentType {
  DEPOSIT = 'DEPOSIT',
  PG_VBANK = 'PG-VBANK',
  PG_DEPOSIT = 'PG-DEPOSIT',
  PG_CARD = 'PG-CARD',
}

enum ReceiptType {
  INCOME_DEDUCTION = 'INCOME-DEDUCTION',

  PROOF_OF_EXPENDITURE = 'PROOF-OF-EXPENDITURE',
}

enum PayMethod {
  CARD = 'CARD',
  VBANK = 'VBANK',
  BANK = 'BANK',
  CELLPHONE = 'CELLPHONE',
}

type OrderItem = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
  carrier?: string;
};

type Orderer = {
  name?: string;
  homePhone?: string;
  mobilePhone?: string;
  email?: string;
  password?: string;
};

type Recipient = {
  name?: string;
  homePhone?: string;
  mobilePhone?: string;
};

type UpdateOrderer = {
  name: string;
  homePhone?: string;
  mobilePhone?: string;
  email?: string;
  password?: string;
};

type UpdateRecipient = {
  name: string;
  homePhone?: string;
  mobilePhone?: string;
};

type Address = {
  zipCode: string;
  basic: string;
  locality: string;
  region?: string;
};

type PaymentDepositCashReceipt = {
  type: ReceiptType;
  value: string;
};

type PaymentDeposit = {
  wireTransferId: string;
  depositor: string;
  cashReceipt?: PaymentDepositCashReceipt;
};

type Payment = {
  type: PaymentType;
  deposit?: PaymentDeposit;
  pgId?: string;
};

type CreateOrderBody = {
  items: OrderItem[];
};

type UpdateOrderBody = {
  orderer?: Orderer;
  recipient?: Recipient;
  couponIds?: string[];
  usingMileage?: number;
};

type UpdateOrderItemBody = {
  quantity?: number;
  productVariant?: string;
  couponIds?: string[];
};

type CheckoutOrderBody = {
  productName?: string;
  orderer: UpdateOrderer;
  recipient: UpdateRecipient;
  couponIds?: string[];
  usingMileage?: number;
  address: Address;
  payment: Payment;
};

type DoneOrderBody = {
  resultCode: string;
  resultMessage: string;
  authenticationToken: string;
  payMethod: PayMethod;
  merchantId: string;
  merchantOrderId: string;
  paymentPrice: number;
  reserved: string;
  transactionId: string;
  nextAppUrl: string;
  netCancelUrl: string;
};

export async function createOrder(body: CreateOrderBody) {
  await lite.request('POST', `orders`, { body });
}

export async function getOrder(orderId: string) {
  await lite.request('GET', `orders/${orderId}`);
}

export async function updateOrder(orderId: string, body: UpdateOrderBody) {
  await lite.request('PATCH', `orders/${orderId}`, { body });
}

export async function updateOrderItem(
  orderId: string,
  orderItemId: string,
  body: UpdateOrderItemBody
) {
  await lite.request('PATCH', `orders/${orderId}/orderItems/${orderItemId}`, {
    body,
  });
}

export async function deleteOrderItem(orderId: string, orderItemId: string) {
  await lite.request('DELETE', `orders/${orderId}/orderItems/${orderItemId}`);
}

export async function checkoutOrder(orderId: string, body: CheckoutOrderBody) {
  await lite.request('POST', `orders/${orderId}/checkout`, { body });
}

export async function doneOrder(orderId: string, body: DoneOrderBody) {
  await lite.request('POST', `orders/${orderId}/done`, { body });
}
