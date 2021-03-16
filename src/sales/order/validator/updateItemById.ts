import {
  NumberChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import { UpdateItemByIdDto } from '../type/updateItemById';

export class UpdateItemByIdValidator {
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

  public validate(body: UpdateItemByIdDto, location: string) {
    this.objectChecker.check(body, location);

    if (body.quantity !== undefined) {
      this.numberChecker.check(body.quantity, `${location}.quantity`);
    }

    if (body.productVariant !== undefined) {
      this.stringChecker.check(
        body.productVariant,
        `${location}.productVariant`
      );
    }

    if (body.couponIds !== undefined) {
      this.stringArrayChecker.check(body.couponIds, `${location}.couponIds`);
    }
  }
}
