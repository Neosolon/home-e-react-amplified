import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerID: string;
  readonly accountRepresentativeID: string;
  readonly productID: string;
  readonly status: string;
  readonly amount: number;
  readonly date: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerID: string;
  readonly accountRepresentativeID: string;
  readonly productID: string;
  readonly status: string;
  readonly amount: number;
  readonly date: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phoneNumber?: string | null;
  readonly accountRepresentativeID: string;
  readonly ordersByDate?: (Order | null)[] | null;
  readonly ordersByStatusDate?: (Order | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phoneNumber?: string | null;
  readonly accountRepresentativeID: string;
  readonly ordersByDate: AsyncCollection<Order>;
  readonly ordersByStatusDate: AsyncCollection<Order>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customer = LazyLoading extends LazyLoadingDisabled ? EagerCustomer : LazyCustomer

export declare const Customer: (new (init: ModelInit<Customer>) => Customer) & {
  copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

type EagerEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly startDate: string;
  readonly phoneNumber: string;
  readonly warehouseID: string;
  readonly jobTitle: string;
  readonly newHire: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Employee, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly startDate: string;
  readonly phoneNumber: string;
  readonly warehouseID: string;
  readonly jobTitle: string;
  readonly newHire: string;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}

type EagerWarehouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Warehouse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly employees?: (Employee | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWarehouse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Warehouse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly employees: AsyncCollection<Employee>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Warehouse = LazyLoading extends LazyLoadingDisabled ? EagerWarehouse : LazyWarehouse

export declare const Warehouse: (new (init: ModelInit<Warehouse>) => Warehouse) & {
  copyOf(source: Warehouse, mutator: (draft: MutableModel<Warehouse>) => MutableModel<Warehouse> | void): Warehouse;
}

type EagerAccountRepresentative = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountRepresentative, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customers?: (Customer | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly orderTotal?: number | null;
  readonly salesPeriod?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccountRepresentative = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccountRepresentative, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customers: AsyncCollection<Customer>;
  readonly orders: AsyncCollection<Order>;
  readonly orderTotal?: number | null;
  readonly salesPeriod?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AccountRepresentative = LazyLoading extends LazyLoadingDisabled ? EagerAccountRepresentative : LazyAccountRepresentative

export declare const AccountRepresentative: (new (init: ModelInit<AccountRepresentative>) => AccountRepresentative) & {
  copyOf(source: AccountRepresentative, mutator: (draft: MutableModel<AccountRepresentative>) => MutableModel<AccountRepresentative> | void): AccountRepresentative;
}

type EagerInventory = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Inventory, ['productID', 'warehouseID']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly productID: string;
  readonly warehouseID: string;
  readonly inventoryAmount: number;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInventory = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Inventory, ['productID', 'warehouseID']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly productID: string;
  readonly warehouseID: string;
  readonly inventoryAmount: number;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Inventory = LazyLoading extends LazyLoadingDisabled ? EagerInventory : LazyInventory

export declare const Inventory: (new (init: ModelInit<Inventory>) => Inventory) & {
  copyOf(source: Inventory, mutator: (draft: MutableModel<Inventory>) => MutableModel<Inventory> | void): Inventory;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly orders?: (Order | null)[] | null;
  readonly inventories?: (Inventory | null)[] | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly orders: AsyncCollection<Order>;
  readonly inventories: AsyncCollection<Inventory>;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}