import { ClientRepository } from "../repositories/clientRepository";
import { Client } from "../models/Client";

export class ClientService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = new ClientRepository();
  }

  async createClient(client: Client): Promise<void> {
    await this.clientRepository.createClient(client);
  }

  async getClientById(id: string): Promise<Client | null> {
    return await this.clientRepository.getClientById(id);
  }

  async updateClient(id: string, client: Partial<Client>): Promise<void> {
    await this.clientRepository.updateClient(id, client);
  }

  async deleteClient(id: string): Promise<void> {
    await this.clientRepository.deleteClient(id);
  }
}
