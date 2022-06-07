import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
// import Link from "next/link"
export default function Produtos() {

    const [todosOsProdutos, setTodosOsProdutos] = useState([])
    const router = useRouter()

    async function MostrarTodosOsProdutos() {
        const resultado = await fetch(`/api/ObterTodosOsProdutos`)
        const json = await resultado.json()
        setTodosOsProdutos(json)
    }
    useEffect(() => {
        MostrarTodosOsProdutos()
    }, [])
    console.log(todosOsProdutos)

    async function verProduto(_id) {
        router.push(`/Produto/${_id}`)
    }

    return (
        <div>
            <span className="block text-3xl font-bold mb-5 text-center border-t-2 border-b-2 p-4">Catalog</span>
            <span></span>
            <div className="flex flex-row justify-around">
                <div className="list-none flex flex-col m-5">
                    <li className="block"><a>Plastic</a></li>
                    <li className="block"><a>Cardboard</a></li>
                    <li className="block"><a>Wood</a></li>
                </div>
                <div>
                    <div className="flex flex-row justify-center items-center flex-wrap">
                        {todosOsProdutos.map((e) =>
                            //    <Link href="/${}">
                            <div className="m-5">
                                <div style={{
                                    backgroundImage: `url(${e.imagem})`, height: "20vh", width: "20vw",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }} onClick={() => verProduto(e._id)}>
                                </div>
                                {/* <div>
                                    <h1>nome: {e.name}</h1>
                                    <h3>descricao: {e.description}</h3>
                                    <h3>preco: {e.price}</h3>
                                </div> */}
                            </div>
                            // </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}