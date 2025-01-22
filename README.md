# Customer Registration System (CRUD) with NodeJS, TypeScript, and AWS

This project is a customer registration system (CRUD) developed in Node.js with TypeScript, using a serverless architecture on AWS (Lambda, API Gateway, and DynamoDB).

## 📋 Requirements

Before you begin, make sure you have installed:

- Node.js (v20.x or higher)
- npm, yarn or bun (package manager)
- Serverless Framework (installed globally)
- AWS CLI configured with valid credentials

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/YanKaiky/node-aws-sdk.git
cd node-aws-sdk
```

### 2. Install the Dependencies

Install the project dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
bun install
```

### 3. AWS CLI Configuration

Make sure the AWS CLI is configured with the correct credentials. Run the command below and enter your AWS credentials:

```bash
aws configure
aws sts get-caller-identity
```

### 4. Project Configuration

#### Environment Variables

The project uses environment variables to configure the DynamoDB table name. Ensure that the `serverless.yml` file is properly configured. Here’s an example of how to set up the environment variables in the `serverless.yml` file:

#### DynamoDB Local (Optional)

If you want to test locally, you can use DynamoDB Local. Follow the steps below:

1. Download DynamoDB Local:

   - Follow the instructions from the official documentation: [AWS DynamoDB Local Documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)
   - Alternatively, you can download the .jar file directly from the AWS DynamoDB Local download page:
     [DynamoDB Local Download](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)

2. Start DynamoDB Local:

   ```bash
   java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
   ```

3. Configure Your Application to Use DynamoDB Local:

   ```yaml
   provider:
     environment:
       TABLE_NAME: ClientsTable
       DYNAMODB_ENDPOINT: http://localhost:8000
   ```

### 5. Deploy the Project to AWS

To deploy the project to AWS, run the following command:

```bash
serverless deploy
```

The Serverless Framework will deploy the Lambda function, API Gateway, and DynamoDB table. After the deployment, it will display the API URL in the terminal.

### 6. Test the API

Use the API URL provided after deployment to test the endpoints. Here are the available endpoints:

**POST /clients**: Creates a new client.

```bash
curl -X POST https://{api-id}.execute-api.{region}.amazonaws.com/prod/clients \
-H "Content-Type: application/json" \
-d '{
  "id": "1",
  "fullName": "Yan Kaiky",
  "birthDate": "2002-12-22",
  "isActive": true,
  "addresses": [
    {
      "street": "R. XV de Novembro",
      "number": "1462",
      "neighborhood": "Centro",
      "city": "Blumenau",
      "uf": "SC"
    }
  ],
  "contacts": [
    {
      "email": "yankaiky@example.com",
      "phone": "47999999999",
      "isPrimary": true
    }
  ]
}'
```

**GET /clients/{id}**: Gets a client by ID.

```bash
curl -X GET https://{api-id}.execute-api.{region}.amazonaws.com/prod/clients/1
```

**PUT /clients/{id}**: Updates a client by ID.

```bash
curl -X PUT https://{api-id}.execute-api.{region}.amazonaws.com/prod/clients/1 \
-H "Content-Type: application/json" \
-d '{
  "fullName": "Yan Kaiky",
  "isActive": false
}'
```

**DELETE /clients/{id}**: Deletes a customer by ID.

```bash
curl -X DELETE https://{api-id}.execute-api.{region}.amazonaws.com/prod/clients/1
```

### 7. Testes Unitários

To run the unit tests, execute:

```bash
npm test
```

or

```bash
yarn test
```

This will run the tests defined in the directory `tests/`.

## 🛠️ Project Structure

The project structure is organized as follows:

```
/node-aws-sdk
│
├── /src
│   ├── /handlers
│   │   └── clientHandler.ts
│   ├── /models
│   │   └── Client.ts
│   ├── /repositories
│   │   └── clientRepository.ts
│   ├── /services
│   │   └── clientService.ts
│   ├── /utils
│   │   └── apiResponse.ts
│   └── index.ts
│
├── /tests
│   └── clientHandler.test.ts
│
├── .gitignore
├── jest.config.ts
├── package-lock.json
├── package.json
└── README.md
├── serverless.yml
├── template.yml
├── tsconfig.json
```

## 📝 Key Features

- **Test Coverage**: The project includes unit tests to ensure code quality.
- **Serverless Framework**: Uses the Serverless Framework to simplify deployment and management of AWS resources.
- **TypeScript**: The code is written in TypeScript, ensuring static typing and greater development safety.

## 🔗 Useful Links

Here are some useful links to help you get started or learn more about the technologies used in this project:

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda/)
- [AWS API Gateway Documentation](https://docs.aws.amazon.com/apigateway/)
- [AWS DynamoDB Documentation](https://docs.aws.amazon.com/dynamodb/)
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs/)
- [AWS CLI Documentation](https://docs.aws.amazon.com/cli/)

These resources will provide you with detailed information and guidance on how to work with the tools and services used in this project.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.

The MIT License is a permissive free software license that allows you to use, modify, and distribute the code with minimal restrictions. For more information about the MIT License, visit: https://opensource.org/licenses/MIT.
