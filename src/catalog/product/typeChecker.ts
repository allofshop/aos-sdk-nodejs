import {
  BooleanChecker,
  DateQueryChecker,
  NumberQueryChecker,
  ObjectChecker,
  SortQueryChecker,
  StringArrayChecker,
} from '~/base/typeChecker';

import { GetProductsQuery } from './type';

export class GetQueryChecker {
  private booleanChecker: BooleanChecker;
  private stringArrayChecker: StringArrayChecker;
  private objectChecker: ObjectChecker;
  private dateQueryChecker: DateQueryChecker;
  private numberQueryChecker: NumberQueryChecker;
  private sortQueryChecker: SortQueryChecker;

  constructor() {
    this.booleanChecker = new BooleanChecker();
    this.stringArrayChecker = new StringArrayChecker();
    this.objectChecker = new ObjectChecker();
    this.dateQueryChecker = new DateQueryChecker();
    this.numberQueryChecker = new NumberQueryChecker();
    this.sortQueryChecker = new SortQueryChecker();
  }

  public checkQuery(query: GetProductsQuery, location: string) {
    this.objectChecker.check(query, location);

    if (query.vendorIds !== undefined) {
      this.stringArrayChecker.check(query.vendorIds, `${location}.vendorIds`);
    }

    if (query.ids !== undefined) {
      this.stringArrayChecker.check(query.ids, `${location}.ids`);
    }

    if (query.displayable !== undefined) {
      this.booleanChecker.check(query.displayable, `${location}.displayable`);
    }

    if (query.sellable !== undefined) {
      this.booleanChecker.check(query.sellable, `${location}.sellable`);
    }

    if (query.names !== undefined) {
      this.stringArrayChecker.check(query.names, `${location}.names`);
    }

    if (query.codes !== undefined) {
      this.stringArrayChecker.check(query.codes, `${location}.codes`);
    }

    if (query.customCodes !== undefined) {
      this.stringArrayChecker.check(
        query.customCodes,
        `${location}.customCodes`
      );
    }

    if (query.brandCodes !== undefined) {
      this.stringArrayChecker.check(query.brandCodes, `${location}.brandCodes`);
    }

    if (query.manufactureCodes !== undefined) {
      this.stringArrayChecker.check(
        query.manufactureCodes,
        `${location}.manufactureCodes`
      );
    }

    if (query.supplierCodes !== undefined) {
      this.stringArrayChecker.check(
        query.supplierCodes,
        `${location}.supplierCodes`
      );
    }

    if (query.tags !== undefined) {
      this.stringArrayChecker.check(query.tags, `${location}.tags`);
    }

    if (query.price !== undefined) {
      this.numberQueryChecker.check(query.price, `${location}.price`);
    }

    if (query.retailPrice !== undefined) {
      this.numberQueryChecker.check(
        query.retailPrice,
        `${location}.retailPrice`
      );
    }

    if (query.grossPrice !== undefined) {
      this.numberQueryChecker.check(query.grossPrice, `${location}.grossPrice`);
    }

    if (query.createdAt !== undefined) {
      this.dateQueryChecker.check(query.createdAt, `${location}.createdAt`);
    }

    if (query.updatedAt !== undefined) {
      this.dateQueryChecker.check(query.updatedAt, `${location}.updatedAt`);
    }

    if (query.categoryIds !== undefined) {
      this.stringArrayChecker.check(
        query.categoryIds,
        `${location}.categoryIds`
      );
    }

    if (query.includeSubCategory !== undefined) {
      this.booleanChecker.check(
        query.includeSubCategory,
        `${location}.includeSubCategory`
      );
    }

    if (query.stock !== undefined) {
      this.numberQueryChecker.check(query.stock, `${location}.stock`);
    }

    if (query.safetyStock !== undefined) {
      this.numberQueryChecker.check(
        query.safetyStock,
        `${location}.safetyStock`
      );
    }

    if (query.weight !== undefined) {
      this.numberQueryChecker.check(query.weight, `${location}.weight`);
    }

    if (query.sort !== undefined) {
      this.sortQueryChecker.check(query.sort, `${location}.sort`);
    }
  }
}
