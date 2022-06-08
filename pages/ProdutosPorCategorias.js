import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link"
export default function Produtos({ type, setType }) {
    const [todosOsProdutos, setTodosOsProdutos] = useState([])
    const router = useRouter()

    async function MostrarTodosOsProdutos() {
        const resultado = await fetch(`/api/ObterTodosOsProdutosPorCategoria?type=${type}`)
        const json = await resultado.json()
        setTodosOsProdutos(json)
    }
    // console.log(type)
    useEffect(() => {
        MostrarTodosOsProdutos()
    }, [type])
    // console.log(todosOsProdutos)
    async function verProduto(_id) {
        router.push(`/Produto/${_id}`)
    }

    return (
        <div>
            <div className="flex justify-between text-3xl font-bold mb-5 pl-6"><p className="border-solid border-amber-400 bg-amber-400 rounded-full border-2 text-center p-2 pl-4 pr-4 text-white">Catalog</p><p></p></div>
            <span></span>
            <div className="flex flex-row justify-around">
                <div className="list-none flex flex-col m-5">
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer p-2 border-b-2 border-amber-400" onClick={() => { setType("plastico") }}>Plastic</button>
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer p-2 border-b-2 border-amber-400" onClick={() => { setType("madeira") }}>Madeira</button>
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer p-2 border-b-2 border-amber-400" onClick={() => { setType("cartao") }}>Cartao</button>
                    <Link href="/produtos">
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer p-2 border-b-2 border-amber-400">Todos os Produtos</button>
                    </Link>
                </div>
                <div>
                    <div className="flex flex-row justify-center items-center flex-wrap">
                        {todosOsProdutos.map((e) =>
                            //    <Link href="/${}">
                            <div className="m-5">
                                <div className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer" style={{
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