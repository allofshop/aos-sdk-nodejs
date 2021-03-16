import { ValueShouldBeArray } from '~/base/error';
import {
  NumberChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import {
  AddCartItemBody,
  CartItem,
  CheckoutCartBody,
  CreateCartBody,
  UpdateCartItemBody,
} from './type';

class CartItemArrayChecker {
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public check(items: CartItem[], location: string) {
    if (typeof items !== 'object' || items.length === undefined) {
      throw new ValueShouldBeArray(location);
    }

    items.map((i) => {
      this.stringChecker.check(i.product, `${location}.product`);

      if (i.productVariant !== undefined) {
        this.stringChecker.check(
          i.productVariant,
          `${location}.productVariant`
        );
      }

      if (i.optionValues !== undefined) {
        this.stringArrayChecker.check(
          i.optionValues,
          `${location}.optionValues`
        );
      }

      if (i.quantity !== undefined) {
        this.numberChecker.check(i.quantity, `${location}.quantity`);
      }
    });
  }
}

export class CreateBodyChecker {
  private objectChecker: ObjectChecker;
  private cartItemArrayChecker: CartItemArrayChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.cartItemArrayChecker = new CartItemArrayChecker();
  }

  public check(body: CreateCartBody, location: string) {
    this.objectChecker.check(body, location);
    this.cartItemArrayChecker.check(body.items, `${location}.items`);
  }
}

export class AddItemBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public check(body: AddCartItemBody, location: string) {
    this.objectChecker.check(body, location);

    this.stringChecker.check(body.product, `${location}.product`);

    if (body.productVariant !== undefined) {
      this.stringChecker.check(
        body.productVariant,
        `${location}.productVariant`
      );
    }

    if (body.optionValues !== undefined) {
      this.stringArrayChecker.check(
        body.optionValues,
        `${location}.optionValues`
      );
    }

    this.numberChecker.check(body.quantity, `${location}.quantity`);
  }
}

export class UpdateBodyChecker {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public check(body: UpdateCartItemBody, location: string) {
    this.objectChecker.check(body, location);

    if (body.productVariantId !== undefined) {
      this.stringChecker.check(
        body.productVariantId,
        `${location}.productVariantId`
      );
    }

    if (body.optionValues !== undefined) {
      this.stringArrayChecker.check(
        body.optionValues,
        `${location}.optionValues`
      );
    }

    if (body.quantity !== undefined) {
      this.numberChecker.check(body.quantity, `${location}.quantity`);
    }
  }
}

export class CheckoutBodyChecker {
  private objectChecker: ObjectChecker;
  private stringArrayChecker: StringArrayChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringArrayChecker = new StringArrayChecker();
  }

  public check(body: CheckoutCartBody, location: string) {
    this.objectChecker.check(body, location);
    this.stringArrayChecker.check(body.cartItemIds, `${location}.cartItemIds`);
  }
}
