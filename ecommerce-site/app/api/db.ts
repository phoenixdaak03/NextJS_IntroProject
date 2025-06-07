
import { MongoClient, Db, ServerApiVersion } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDB: Db | null = null;

export async function connectToDB(){

    if(cachedClient && cachedDB){
        return { client: cachedClient, db: cachedDB };
    }


    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qu5wkqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

   
    await client.connect();

    cachedClient = client;
    cachedDB = client.db('ecommerce-nextjs');

    return { client, db: client.db('ecommerce-nextjs') }
    
}


