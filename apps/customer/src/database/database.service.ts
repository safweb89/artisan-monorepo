// External Dependencies
import * as dotenv from 'dotenv';
import * as mongoDB from 'mongodb';

// Global Variables
export const collections: { customer?: mongoDB.Collection } = {};

// Initialize Connection

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const customerCollection: mongoDB.Collection = db.collection(
    process.env.ARTISANT_COLLECTION_NAME
  );

  collections.customer = customerCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${customerCollection.collectionName}`
  );
}
