import { MongoClient } from 'mongodb'

const URL = process.env.MONGO_URL ?? "mongodb://localhost:27017"
const BASE_DE_DADOS = "hack304"
const COLECAO_PRODUTOS = "Produtos"
const COLECAO_CARINHO = "Carinho"

async function getMongoCollection() {
    const client = await connectToMongo()
    return client.db(BASE_DE_DADOS).collection(COLECAO_PRODUTOS)
  }
let client
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL)
    }
    return client;
  } catch (err) {
    console.log(err)
  }
}

export default getMongoCollection 



