import { MongoClient } from 'mongodb';
import MongoConfig from './MongoConfig';

export class MongoClientFactory {
  private static clients: { [key: string]: MongoClient } = {};

  static async createClient(contextName: string, config: MongoConfig): Promise<MongoClient> {
    let client = MongoClientFactory.getClient(contextName);
    if (!client) {
      client = await MongoClientFactory.createAndConnectClient(config);
      MongoClientFactory.registerClient(contextName, client);
    }
    return client;
  }

  private static getClient(contextName: string): MongoClient | null {
    return MongoClientFactory.clients[contextName];
  }

  private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
    const url = config.url;
    const client = new MongoClient(url);
    await client.connect();
    return client;
  }

  private static registerClient(contextName: string, client: MongoClient): void {
    MongoClientFactory.clients[contextName] = client;
  }
}
