type Address = {
    adress1: string;
    adress2: string;
    postalCode:string;
    city: string;
    country: string;
}

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  address: Address;
  phone: number;
  email: string;
};
