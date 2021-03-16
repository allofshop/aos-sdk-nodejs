import {
  NumberChecker,
  ObjectChecker,
  StringArrayChecker,
  StringChecker,
} from '~/base/typeChecker';

import { CheckoutOneByIdDto } from '../type/checkoutOneById';
import { Address } from '../type/checkoutOneById/_address';
import { Orderer } from '../type/checkoutOneById/_orderer';
import { Recipient } from '../type/checkoutOneById/_recipient';

class OrdererValidator {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public validate(orderer: Orderer, location: string) {
    this.objectChecker.check(orderer, location);
    this.stringChecker.check(orderer.name, `${location}.name`);

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

  public validate(recipient: Recipient, location: string) {
    this.objectChecker.check(recipient, location);
    this.stringChecker.check(recipient.name, `${location}.name`);

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

class AddressValidator {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
  }

  public validate(address: Address, location: string) {
    this.objectChecker.check(address, location);
    this.stringChecker.check(address.zipCode, `${location}.zipCode`);
    this.stringChecker.check(address.basic, `${location}.basic`);
    this.stringChecker.check(address.locality, `${location}.locality`);

    if (address.region !== undefined) {
      this.stringChecker.check(address.region, `${location}.region`);
    }
  }
}

export class CheckoutOneByIdValidator {
  private objectChecker: ObjectChecker;
  private stringChecker: StringChecker;
  private stringArrayChecker: StringArrayChecker;
  private numberChecker: NumberChecker;
  private ordererValidator: OrdererValidator;
  private recipientValidator: RecipientValidator;
  private addressValidator: AddressValidator;

  constructor() {
    this.objectChecker = new ObjectChecker();
    this.stringChecker = new StringChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.numberChecker = new NumberChecker();
    this.ordererValidator = new OrdererValidator();
    this.recipientValidator = new RecipientValidator();
    this.addressValidator = new AddressValidator();
  }

  public check(body: CheckoutOneByIdDto, location: string) {
    this.objectChecker.check(body, location);
    this.ordererValidator.validate(body.orderer, `${location}.orderer`);
    this.recipientValidator.validate(body.recipient, `${location}.recipient`);
    this.addressValidator.validate(body.address, `${location}.address`);

    if (body.productName !== undefined) {
      this.stringChecker.check(body.productName, `${location}.productName`);
    }

    if (body.couponIds !== undefined) {
      this.stringArrayChecker.check(body.couponIds, `${location}.couponIds`);
    }

    if (body.usingMileage !== undefined) {
      this.numberChecker.check(body.usingMileage, `${location}.usingMileage`);
    }
  }
}
