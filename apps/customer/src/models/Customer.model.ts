import { ObjectId } from 'mongodb';
import { CustomerType } from './types';
export default class Customer {
  public customer: CustomerType;
  public customerId: ObjectId;
  constructor(customer: CustomerType, customerId?: ObjectId) {
    this.customer = customer;
    this.customerId = customerId;
  }
}
