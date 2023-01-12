# Available Schemas
### **Order**

| **Key**                     | **Property** Type |
|-------------------------|-------------------|
| id                      | ID                |
| customerID              | ID                |
| accountRepresentativeID | ID                |
| status                  | String            |
| amount                  | Integer           |
| date                    | String            |
| owner                   | String            |



### **Deploying the API**

To deploy this backend, run the push command:
### `amplify push`


### **AppSync**

To view the GraphQL API in the AppSync console at any time, run the following command:
### `amplify console api`

### **Run Api Locally**
### `amplify mock api`

Helpful resources:
- Amplify documentation: https://docs.amplify.aws
- Amplify CLI documentation: https://docs.amplify.aws/cli
- More details on this folder & generated files: https://docs.amplify.aws/cli/reference/files
- Join Amplify's community: https://amplify.aws/community/
