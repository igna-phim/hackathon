import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
// import Link from "next/link"
export default function Produtos({ type,setType,setTotal }) {

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
    

    async function verProduto(_id) {
        router.push(`/Produto/${_id}`)
    }

    async function verProdutosPorCategoria() {
        router.push(`/ProdutosPorCategorias`)
    }
    return (
        <div>
            <div className="absolute justify-between text-3xl font-bold mb-5 pl-6"><p className="border-solid border-amber-400 bg-amber-400 rounded-full border-2 text-center p-2 pl-4 pr-4 text-white">Catalog</p><p></p></div>
            <span></span>
            <div className="flex flex-row justify-start ">
                <div className="list-none flex flex-col mt-16 ml-12 mr-16">
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer inline p-2 border-b-2 border-amber-400" onClick={() => { setType("plastico"), verProdutosPorCategoria() }}>Plastic</button>
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer p-2 border-b-2 border-amber-400" onClick={() => { setType("Madeira"), verProdutosPorCategoria() }}>Wood</button>
                    <button className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer p-2 border-b-2 border-amber-400" onClick={() => { setType("cartao"), verProdutosPorCategoria() }}>Cardboard</button>
                </div>
                <div>
                    <div className="flex flex-row justify-center items-center flex-wrap">
                        {todosOsProdutos.map((e) =>
                            //    <Link href="/${}">
                            <div className="m-2">
                                <div className="shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer" style={{
                                    backgroundImage: `url(${e.imagem})`, height: "20vh", width: "20vw",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }} onClick={() => {verProduto(e._id),setTotal((prev)=> prev + e.price)}}>
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