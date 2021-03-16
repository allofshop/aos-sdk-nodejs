export type CartItem = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
};

export type CreateCartBody = {
  items: CartItem[];
};

export type AddCartItemBody = {
  product: string;
  productVariant?: string;
  optionValues?: string[];
  quantity: number;
};

export type UpdateCartItemBody = {
  productVariantId?: string;
  optionValues?: string[];
  quantity?: number;
};

export type CheckoutCartBody = {
  cartItemIds: string[];
};
