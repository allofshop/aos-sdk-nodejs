import {
  NumberChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import { UpdateOneByIdDto } from '../type/updateOneById';
import { Orderer } from '../type/updateOneById/_orderer';
import { Recipient } from '../type/updateOneById/_recipient';

class OrdererValidator {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(orderer: Orderer, location: string) {
    this.objectChecker.check(orderer, location);

    if (orderer.name !== undefined) {
      this.stringChecker.check(orderer.name, `${location}.name`);
    }

    if (orderer.homePhone !== undefined) {
      this.stringChecker.check(orderer.homePhone, `${location}.homePhone`);
    }

    if (orderer.mobilePhone !== undefined) {
      this.stringChecker.check(orderer.mobilePhone, `${location}.mobilePhone`);
    }

    if (orderer.email !== undefined) {
      this.stringChecker.check(orderer.email, `${location}.email`);
    }

    if (orderer.password !== undefined) {
      this.stringChecker.check(orderer.password, `${location}.password`);
    }
  }
}

class RecipientValidator {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public check(recipient: Recipient, location: string) {
    this.objectChecker.check(recipient, location);

    if (recipient.name !== undefined) {
      this.stringChecker.check(recipient.name, `${location}.name`);
    }

    if (recipient.homePhone !== undefined) {
      this.stringChecker.check(recipient.homePhone, `${location}.homePhone`);
    }

    if (recipient.mobilePhone !== undefined) {
      this.stringChecker.check(
        recipient.mobilePhone,
        `${location}.mobilePhone`
      );
    }
  }
}

export class UpdateOneByIdValidator {
  private objectChecker: ObjectChecker;
  private ordererValidator: OrdererValidator;
  private recipientValidator: RecipientValidator;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.ordererValidator = new OrdererValidator();
    this.recipientValidator = new RecipientValidator();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
  }

  public validate(body: UpdateOneByIdDto, location: string) {
    this.objectChecker.check(body, location);

    if (body.orderer !== undefined) {
      this.ordererValidator.check(body.orderer, `${location}.orderer`);
    }

    if (body.recipient !== undefined) {
      this.recipientValidator.check(body.recipient, `${location}.recipient`);
    }

    if (body.couponIds !== undefined) {
      this.stringArrayChecker.check(body.couponIds, `${location}.couponIds`);
    }

    if (body.usingMileage !== undefined) {
      this.numberChecker.check(body.usingMileage, `${location}.usingMileage`);
    }
  }
}
