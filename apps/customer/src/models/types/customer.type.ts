import { Address } from './address.type';

export type CustomerType = {
  firstName: string;
  lastName: string;
  address: Address;
  phone: number;
  email: string;
};
