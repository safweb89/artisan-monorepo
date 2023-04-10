import { ObjectId } from 'mongodb';
import * as dotenv from 'dotenv';
import { connectToDatabase } from '@libs/database';
import Customer from '../models/Customer.model';
import { BadRequestApiError } from '@libs/error-handler';
import { logger } from '@libs/logger';
import { BSONError } from 'bson';

dotenv.config();

//Connect to Atlas MongoDB Databse
let customerCollection;
connectToDatabase(process.env.ARTISANT_COLLECTION_NAME).then(
  (collection) => (customerCollection = collection)
);

const getAllCustomers = async () => {
  const customers: Customer[] = customerCollection.find({}).toArray();
  if (customers) return customers;
};

const getOneCustomer = async (customerId: string) => {
  try {
    return customerCollection.findOne({
      _id: new ObjectId(customerId),
    });
  } catch (error) {
    logger.error('service', error as BSONError);
    throw new BadRequestApiError(error);
  }
};

const createNewCustomer = (customer: Customer) => {
  return customerCollection.insertOne(customer);
};

const updateOneCustomer = (customerId: string, customer: Customer) => {
  return customerCollection.updateOne(
    { _id: new ObjectId(customerId) },
    { $set: customer }
  );
};

const deleteOneCustomer = (customerId: string) => {
  return customerCollection.deleteOne({ _id: new ObjectId(customerId) });
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
