import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  UpdateCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Client } from "../models/Client";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "ClientsTable";

export class ClientRepository {
  async createClient(client: Client): Promise<void> {
    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: client,
    });
    await docClient.send(command);
  }

  async getClientById(id: string): Promise<Client | null> {
    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: { id },
    });
    const result = await docClient.send(command);
    return result.Item as Client | null;
  }

  async updateClient(id: string, client: Partial<Client>): Promise<void> {
    const command = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: { id },
      UpdateExpression:
        "set fullName = :fullName, birthDate = :birthDate, isActive = :isActive, addresses = :addresses, contacts = :contacts",
      ExpressionAttributeValues: {
        ":fullName": client.fullName,
        ":birthDate": client.birthDate,
        ":isActive": client.isActive,
        ":addresses": client.addresses,
        ":contacts": client.contacts,
      },
    });
    await docClient.send(command);
  }

  async deleteClient(id: string): Promise<void> {
    const command = new DeleteCommand({
      TableName: TABLE_NAME,
      Key: { id },
    });
    await docClient.send(command);
  }
}
