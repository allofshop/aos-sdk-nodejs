import { ValueShouldBeArray } from '~/base/error';
import {
  NumberChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import { CreateDto } from '../type/create';
import { OrderItem } from '../type/create/_orderItem';

class OrderItemArrayValidator {
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public validate(items: OrderItem[], location: string) {
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

      this.numberChecker.check(i.quantity, `${location}.quantity`);

      if (i.carrier !== undefined) {
        this.stringChecker.check(i.carrier, `${location}.carrier`);
      }
    });
  }
}

export class CreateValidator {
  private objectChecker: ObjectChecker;
  private orderItemArrayValidator: OrderItemArrayValidator;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.orderItemArrayValidator = new OrderItemArrayValidator();
  }

  public validate(body: CreateDto, location: string) {
    this.objectChecker.check(body, location);
    this.orderItemArrayValidator.validate(body.items, `${location}.items`);
  }
}
