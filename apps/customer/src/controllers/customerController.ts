import { errorHandler } from '../helpers/error';
import customerService from '../services/customerService';

const getAllCustomers = async (req, res) => {
  await customerService
    .getAllCustomers()
    .then((customers) => res.json(customers))
    .catch((error) => errorHandler(error));
};

const getOneCustomer = async (req, res) => {
  await customerService
    .getOneCustomer(req.params.customerId)
    .then((customer) => res.json(customer))
    .catch((error) => errorHandler(error));
};

const createNewCustomer = async (req, res) => {
  await customerService
    .createNewCustomer(req.body)
    .then(({ insertedId }) => res.status(201).json(insertedId))
    .catch((error) => errorHandler(error));
};

const updateOneCustomer = async (req, res) => {
  await customerService
    .updateOneCustomer(req.params.customerId, req.body)
    .catch((error) => errorHandler(error));
  res.status(204).send();
};

const deleteOneCustomer = async (req, res) => {
  await customerService
    .deleteOneCustomer(req.params.customerId)
    .catch((error) => errorHandler(error));
  res.status(204).send();
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
