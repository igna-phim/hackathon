import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function ProdutoIndividual({ id }) {
    const [todosOsProdutos, setTodosOsProdutos] = useState([])
    const router = useRouter()

    async function MostrarTodosOsProdutosDoCarrinho() {
        const resultado = await fetch(`/api/ObterOCarrinho`)
        const json = await resultado.json()
        setTodosOsProdutos(json)
    }
    useEffect(() => {
        MostrarTodosOsProdutosDoCarrinho()
    }, [])
    console.log(todosOsProdutos)

    async function ComprarProdutos() {
        router.push(`/Formulario`)
    }


    return (
        <div className="flex flex-row justify-evenly items-center">
            <div >
                {todosOsProdutos.map((e) =>
                    //    <Link href="/${}">
                    <div className="m-5 flex flex-row items-center">
                        <div style={{
                            backgroundImage: `url(${e.imagem})`, height: "20vh", width: "20vw",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }} onClick={() => verProduto(e._id)}>
                        </div>
                        <div className="flex flex-col ml-5">
                            <h1><p className="font-bold inline">Name:</p> {e.name}</h1>
                            <h3><p className="font-bold inline">Price:</p> {e.price} $</h3>
                        </div>
                    </div>
                    // </Link>

                )}
            </div>
            <div className="flex flex-col items-center justify-end">
                <div className="block">Total: </div>
                <div className="flex flex-row">
                    <Link href="/produtos">
                        <button className="m-4 bg-gray-800 text-white rounded border-gray-100 hover:bg-red-700 hover:text-white py-2 px-4">
                            <div class="flex align-middle">
                                <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                </svg>
                                <p className="ml-2">Previous</p>
                            </div>
                        </button>
                    </Link>
                    <div>
                        <button className="m-4 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded" onClick={() => ComprarProdutos()}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

