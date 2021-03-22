import {
  NumberValidator,
  ObjectValidator,
  StringArrayValidator,
  StringValidator,
} from '~/base/validator';

import { UpdateOneByIdDto } from '../type/updateOneById';
import { Orderer } from '../type/updateOneById/_orderer';
import { Recipient } from '../type/updateOneById/_recipient';

class OrdererValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(orderer: Orderer, location: string) {
    this.objectValidator.validate(orderer, location);

    if (orderer.name !== undefined) {
      this.stringValidator.validate(orderer.name, `${location}.name`);
    }

    if (orderer.homePhone !== undefined) {
      this.stringValidator.validate(orderer.homePhone, `${location}.homePhone`);
    }

    if (orderer.mobilePhone !== undefined) {
      this.stringValidator.validate(
        orderer.mobilePhone,
        `${location}.mobilePhone`
      );
    }

    if (orderer.email !== undefined) {
      this.stringValidator.validate(orderer.email, `${location}.email`);
    }

    if (orderer.password !== undefined) {
      this.stringValidator.validate(orderer.password, `${location}.password`);
    }
  }
}

class RecipientValidator {
  private objectValidator: ObjectValidator;
  private stringValidator: StringValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.stringValidator = new StringValidator();
  }

  public validate(recipient: Recipient, location: string) {
    this.objectValidator.validate(recipient, location);

    if (recipient.name !== undefined) {
      this.stringValidator.validate(recipient.name, `${location}.name`);
    }

    if (recipient.homePhone !== undefined) {
      this.stringValidator.validate(
        recipient.homePhone,
        `${location}.homePhone`
      );
    }

    if (recipient.mobilePhone !== undefined) {
      this.stringValidator.validate(
        recipient.mobilePhone,
        `${location}.mobilePhone`
      );
    }
  }
}

export class UpdateOneByIdValidator {
  private objectValidator: ObjectValidator;
  private ordererValidator: OrdererValidator;
  private recipientValidator: RecipientValidator;
  private stringArrayValidator: StringArrayValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.ordererValidator = new OrdererValidator();
    this.recipientValidator = new RecipientValidator();
    this.stringArrayValidator = new StringArrayValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(body: UpdateOneByIdDto, location: string) {
    this.objectValidator.validate(body, location);

    if (body.orderer !== undefined) {
      this.ordererValidator.validate(body.orderer, `${location}.orderer`);
    }

    if (body.recipient !== undefined) {
      this.recipientValidator.validate(body.recipient, `${location}.recipient`);
    }

    if (body.couponIds !== undefined) {
      this.stringArrayValidator.validate(
        body.couponIds,
        `${location}.couponIds`
      );
    }

    if (body.usingMileage !== undefined) {
      this.numberValidator.validate(
        body.usingMileage,
        `${location}.usingMileage`
      );
    }
  }
}
