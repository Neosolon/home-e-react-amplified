/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomerWithOrdersByStatusDate = /* GraphQL */ `
query GetCustomerWithOrdersByStatusDate($id: ID!) {
  getCustomer(id: $id) {
    ordersByStatusDate (statusDate: {
      between: [
        { status: "pending" date:  "2018-01-22" },
        { status: "pending", date: "2020-10-11"}
      ]}) {
        items {
            id
            amount
            date
        }
    }
  }
}
`;