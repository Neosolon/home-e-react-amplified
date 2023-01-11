/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
      id
      name
      description
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
      id
      customerID
      accountRepresentativeID
      status
      amount
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
      id
      customerID
      accountRepresentativeID
      status
      amount
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
      id
      customerID
      accountRepresentativeID
      status
      amount
      date
      owner
      createdAt
      updatedAt
    }
  }
`;
