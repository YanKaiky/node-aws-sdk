import { handler } from "../src/handlers/clientHandler";
import { APIGatewayProxyEvent } from "aws-lambda";

describe("Client Handler", () => {
  it("should create a client", async () => {
    const event: APIGatewayProxyEvent = {
      httpMethod: "POST",
      body: JSON.stringify({
        id: "1",
        fullName: "Yan Kaiky",
        birthDate: "2002-12-22",
        isActive: true,
        addresses: [
          {
            street: "R. XV de Novembro",
            number: "1462",
            neighborhood: "Centro",
            city: "Blumenau",
            uf: "SC",
          },
        ],
        contacts: [
          {
            email: "yankaiky@example.com",
            phone: "47999999999",
            isPrimary: true,
          },
        ],
      }),
    } as any;

    const response = await handler(event);
    expect(response.statusCode).toBe(201);
  });
});
