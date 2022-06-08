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
  const collection = await getMongoCollection("Hackathon", "Produtos")
  collection.insertMany(
    [{
      "name": "Cadeira",
      "price": 129.99 ,
      "description": "obra executado com cartão recolhido do lixo e doações  ",
      "type": "cartao",
      "dimention": "40/90cm",
      "imagem": "/cadeira.jpg"
    },
    {
      "name": "puff",
      "price": 469.99,
      "description": "obra executado com cartão recolhido do lixo e doações  ",
      "type": "cartao",
      "dimention": "90/110cm",
      "imagem": "/puff.jpg"
    },
    {
      "name": "Ole",
      "price": 339.99 ,
      "description": "obra executado com cartão recolhido do lixo e doações  ",
      "type": "cartao",
      "dimention": "50/115cm",
      "imagem": "/ole.jpg"
    },
    {
      "name": "rhino",
      "price": 299.99 ,
      "description": "obra executado com cartão recolhido do lixo e doações  ",
      "type": "cartao",
      "dimention": "90/110cm",
      "imagem": "/rhino.jpg"
    },
    {
      "name": "FormasGeometricas",
      "price": 129.99,
      "description": "obra executado com cartão recolhido do lixo e doações  ",
      "type": "cartao",
      "dimention": "60/80cm",
      "imagem": "/geometriaDasFormas.webp"
    },
    {
      "name": "animais",
      "price": 209.99,
      "description": "obra executado com cartão recolhido do lixo e doações  ",
      "type": "cartao",
      "dimention": "20/60cm",
      "imagem": "/animais.jpg"

    },
    {
      "name": "Cadeeiro",
      "price": 129.99,
      "description": "obra executado com plastico recolhido do lixo e doações   ",
      "type": "plastico",
      "dimention": "20/40cm",
      "imagem": "/candeeiro.jpg"
    },
    {
      "name": "Cavalo Marinho",
      "price": 323.99,
      "description": "obra executado com plastico recolhido do lixo e doações  ",
      "type": "plastico",
      "dimention": "40/80cm",
      "imagem": "/cavaloMarinho.jpg"
    },
    {
      "name": "Peixe",
      "price": 226.99,
      "description": "obra executado com plastico recolhido  do lixo e doações   ",
      "type": "plastico",
      "dimention": "20/30cm",
      "imagem": "/peixe.jpg"
    },
    {
      "name": "Iulian",
      "price":99.99,
      "description": "obra executado com plastico recolhido do lixo e doações   ",
      "type": "plastico",
      "dimention": "30/50cm",
      "imagem": "/iulian.jpg"
    },
    {
      "name": "Fenix",
      "price": 706.99,
      "description": "obra executado com plastico recolhido do lixo e doações   ",
      "type": "plastico",
      "dimention": "130/190cm",
      "imagem": "/fenix.jpg"
    },
    {
      "name": "Pantera",
      "price": 620.99,
      "description": "obra executado com plastico recolhido do lixo e doações   ",
      "type": "plastico",
      "dimention": "90/140cm",
      "imagem": "/pantera.jpg"
    },
    {
      "name": "Touro",
      "price": 320.99,
      "description": "obra executado com plastico recolhido do lixo e doações   ",
      "type": "plastico",
      "dimention": "80/110cm",
      "imagem": "/touro.jpg"
    },
    {
      "name": "Tubarão",
      "price": 920.99,
      "description": "obra executado com plastico recolhido do lixo e doações   ",
      "type": "plastico",
      "dimention": "70/170cm",
      "imagem": "/tubarao.jpg"
    },
    {
      "name": "Bonsai",
      "price": 100.99,
      "description": "obra executado com madeira recolhido do lixo ao de casa  ",
      "type": "Madeira",
      "dimention": "80/110cm",
      "imagem": "/bonsai.jpg"
    },
    {
      "name": "Natureza Morta",
      "price": 820.99,
      "description": "obra executado com madeira recolhido do lixo ao de casa  ",
      "type": "Madeira",
      "dimention": "80/140cm",
      "imagem": "/naturezaMorta.jpg"
    },
    {
      "name": "Coruja",
      "price": 990.99,
      "description": "obra executado com madeira recolhido do lixo ao de casa  ",
      "type": "Madeira",
      "dimention": "40/70cm",
      "imagem": "/coruja.jpg"
    },
    {
      "name": "Três Aneis",
      "price": 340.99,
      "description": "obra executado com madeira recolhido do lixo ao de casa  ",
      "type": "Madeira",
      "dimention": "110/220cm",
      "imagem": "/tresAneis.jpg"
    },
    {
      "name": "Bau",
      "price": 190.99,
      "description": "obra executado com madeira recolhido do lixo ao de casa  ",
      "type": "Madeira",
      "dimention": "15/40cm",
      "imagem": "/bau.jpg"
    }
    ]
  )
}

populate_Items()



