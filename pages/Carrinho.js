import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import NewCheck from "../components/NewCheck";

export default function ProdutoIndividual({ total, setTotal }) {
    const [todosOsProdutos, setTodosOsProdutos] = useState([])
    const [removerProduto, setRemoverProduto] = useState(0)
    const [logIn, setLogIn] = useState(true)
    const router = useRouter()

    async function MostrarTodosOsProdutosDoCarrinho() {
        const resultado = await fetch(`/api/ObterOCarrinho`)
        const json = await resultado.json()
        setTodosOsProdutos(json)
    }
    async function removerproduto(id) {
        const resultado = await fetch("/api/RemoverProduto", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "remove": id
            }

        })
        setRemoverProduto(resultado)
    }
    useEffect(() => {
        MostrarTodosOsProdutosDoCarrinho()
        // removerproduto()
    }, [removerProduto])


    async function ComprarProdutos() {
        router.push(`/Formulario`)
    }


    return (

        <div >
            <div className="flex flex-row justify-evenly items-bottom ">
                <div >

                    {todosOsProdutos.map((e) =>
                        //    <Link href="/${}">
                        <div className="m-5 flex flex-row items-center">
                            <div style={{
                                backgroundImage: `url(${e.imagem})`, height: "20vh", width: "20vw",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            </div>
                            <div className="flex flex-row ml-5 items-center">
                                <div className="flex flex-col ml-5">
                                    <h1><p className=" inline">Name:</p> {e.name}</h1>
                                    <h3><p className=" inline">Price:</p> <span className="font-bold">{e.price} $</span></h3>
                                </div>
                                <div className=" ml-5 ">
                                    <button className="btn-fade-out-remove bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2 transition-all duration-500 ease-in-out" onClick={() => { removerproduto(e._id), setTotal((prev) => prev - e.price) }}>Remover</button>
                                </div>
                            </div>
                        </div>
                        // </Link>

                    )}
                </div>
                <div className="border-l flex flex-col items-center justify-end">
                    {todosOsProdutos.length === 1
                        ? <div className="flex flex-row justify-between">Total: <p className="ml-2 font-bold">{total} $</p></div> :
                        <div className="flex">Total: <p className="ml-2 font-bold">{Math.round(total)} $</p></div>
                    }

                    <div className="flex flex-row ">
                        <Link href="/produtos">
                            <button className="border-solid border-amber-600 bg-amber-600 rounded-full ml-10 border-2 text-center mb-4 mt-4 p-2 pl-4 pr-4 text-white hover:bg-transparent text-md font-bold hover:font-bold hover:text-amber-600">
                                <div class="flex align-middle">
                                    <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="ml-2">Previous</p>
                                </div>
                            </button>
                        </Link>
                        <div>
                            <button className="border-solid border-amber-400 bg-amber-400 rounded-full ml-10 border-2 text-center mb-4 mt-4 p-2 pl-4 pr-4 text-white hover:bg-transparent text-md font-bold hover:font-bold hover:text-amber-400" onClick={() => { ComprarProdutos() }}>Checkout</button>
                        </div>




                    </div>
                </div>
            </div>
            {/*  :
                <div className="flex flex-col justify-evenly items-center ">
                    <h1 className="flex flex-col justify-evenly items-center ">Email</h1>
                    <input type="text"></input>
                    <h1 className="flex flex-col justify-evenly items-left ">Password</h1>
                    <input type="password"></input>
                    <Link href="/Formulario">
                        <button >LogIn</button>
                    </Link>
                </div>} */}
        </div >
    )
}

