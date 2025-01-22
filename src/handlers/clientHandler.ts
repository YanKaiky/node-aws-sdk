import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Client } from "../models/Client";
import { apiResponse } from "../utils/apiResponse";
import { ClientService } from "../services/clientService";

const clientService = new ClientService();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const httpMethod = event.httpMethod;

    switch (httpMethod) {
      case "POST":
        const client = JSON.parse(event.body || "{}") as Client;
        await clientService.createClient(client);
        return apiResponse(201, { message: "Client created successfully" });

      case "GET":
        const id = event.pathParameters?.id;
        if (!id) {
          return apiResponse(400, { message: "Client ID is required" });
        }
        const clientData = await clientService.getClientById(id);
        if (!clientData) {
          return apiResponse(404, { message: "Client not found" });
        }
        return apiResponse(200, clientData);

      case "PUT":
        const updateId = event.pathParameters?.id;
        if (!updateId) {
          return apiResponse(400, { message: "Client ID is required" });
        }
        const updatedClient = JSON.parse(event.body || "{}") as Partial<Client>;
        await clientService.updateClient(updateId, updatedClient);
        return apiResponse(200, { message: "Client updated successfully" });

      case "DELETE":
        const deleteId = event.pathParameters?.id;
        if (!deleteId) {
          return apiResponse(400, { message: "Client ID is required" });
        }
        await clientService.deleteClient(deleteId);
        return apiResponse(200, { message: "Client deleted successfully" });

      default:
        return apiResponse(405, { message: "Method not allowed" });
    }
  } catch (error) {
    console.error(error);
    return apiResponse(500, { message: "Internal server error" });
  }
};
