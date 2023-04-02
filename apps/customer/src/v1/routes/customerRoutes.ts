import express from 'express';
const customerRouter = express.Router();

import customerController from '../../controllers/customerController';

customerRouter.get('/', customerController.getAllCustomers);

customerRouter.get('/:customerId', customerController.getOneCustomer);

customerRouter.post('/', customerController.createNewCustomer);

customerRouter.patch('/:customerId', customerController.updateOneCustomer);

customerRouter.delete('/:customerId', customerController.deleteOneCustomer);

export default customerRouter;
