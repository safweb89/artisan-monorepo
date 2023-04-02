import { ObjectId } from 'mongodb';
import { collections } from '../database/database.service';
import Customer from '../models/Customer.model';

const getAllCustomers = () => {
  return collections.customer.find({}).toArray();
};

const getOneCustomer = (customerId: string) => {
  console.log({ customerId });
  const customer = collections.customer.findOne({
    _id: new ObjectId(customerId),
  });
  return customer;
};

const createNewCustomer = (customer: Customer) => {
  return collections.customer.insertOne(customer);
};

const updateOneCustomer = (customerId: string, customer: Customer) => {
  return collections.customer.updateOne(
    { _id: new ObjectId(customerId) },
    { $set: customer }
  );
};

const deleteOneCustomer = (customerId: string) => {
  return collections.customer.deleteOne({ _id: new ObjectId(customerId) });
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
