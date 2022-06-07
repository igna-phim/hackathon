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


 async function populate_Items() {
     const collection = await getMongoCollection("Hackathon","Produtos")
     collection.insertMany(
         [
             new Item("plastico1", 4.99,"descricao1","plastico","/plastico1.jpg"),
             new Item("madeira1", 7.99,"descricao2","madeira","/madeira1.jpg"),
             new Item("madeira2", 2.99,"descricao3","madeira","/madeira2.jpg"),
             new Item("plastico2", 1.99,"descricao4","plastico","/plastico2.jpg"),
             new Item("cartao1", 8.99,"descricao5","cartao","/cartao1.jpg"),
             new Item("cartao2", 3.99,"descricao6","cartao","/cartao2.jpg")
         ]
     )
 }

 class Item {
     constructor(name, price, description, type, imagem) {
         this.name = name,
         this.price = price,
         this.description = description,
         this.type = type,
         this.imagem = imagem
     }
 }

 populate_Items()



