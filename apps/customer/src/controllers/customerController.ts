import { NextFunction, Request, Response } from 'express';
import customerService from '../services/customerService';
import { logger } from '@libs/logger';

const getAllCustomers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  return customerService
    .getAllCustomers()
    .then((customers) => res.json(customers))
    .catch((err) => next(err));
};

const getOneCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await customerService
      .getOneCustomer(req.params.customerId)
      .then((customer) => res.json(customer))
      .catch((err: Error) => {
        logger.error('contoller', err)
        next(err);
      });
  } catch (error) {
    next(error);
  }
};

const createNewCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await customerService
    .createNewCustomer(req.body)
    .then(({ insertedId }) => res.status(201).json(insertedId))
    .catch((err) => next(err));
};

const updateOneCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await customerService
    .updateOneCustomer(req.params.customerId, req.body)
    .catch((err) => next(err));
  res.status(204).send();
};

const deleteOneCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await customerService
    .deleteOneCustomer(req.params.customerId)
    .catch((err) => next(err));
  res.status(204).send();
};

export default {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateOneCustomer,
  deleteOneCustomer,
};
