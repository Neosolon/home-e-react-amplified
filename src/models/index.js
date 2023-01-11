// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Order, Customer, Employee, Warehouse, AccountRepresentative, Inventory, Product } = initSchema(schema);

export {
  Todo,
  Order,
  Customer,
  Employee,
  Warehouse,
  AccountRepresentative,
  Inventory,
  Product
};