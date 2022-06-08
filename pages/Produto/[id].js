import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProdutoIndividual({ id }) {
    const [produtoIndividual, setProdutoIndividual] = useState({})
    const [carrinho, setCarrinho] = useState({})

    async function fetchProduto() {
        const resultado = await fetch(`/api/ProdutoIndividual/${id}`)
        console.log(resultado)
        const json = await resultado.json()

        setProdutoIndividual(json)
    }
    console.log(produtoIndividual)



    useEffect(() => {
        fetchProduto()
    }, []);



    async function criarCarrinho() {
        const resultado = await fetch("/api/CriarCarrinho", {
            method: "POST",
            body: JSON.stringify(produtoIndividual),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const mesagem = await resultado.json()
        setCarrinho(mesagem)
    }


    return (
        <div className="flex flex-row justify-evenly items-center m-3">
            <div className="justify-self-auto shadow-lg" style={{
                backgroundImage: `url(${produtoIndividual.imagem})`, height: "80vh", width: "800px",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="flex flex-row">
                <div>
                    <div className="flex justify-between ">
                        <h1 className="mb-5 text-4xl font-bold text-left"> {produtoIndividual.name}</h1>
                    </div>
                    <div>
                        <h3 className=" text-left">About: {produtoIndividual.description}</h3>
                    </div>
                    <div>
                        <h3 className="text-left">Price: <span className="font-bold">{produtoIndividual.price} $</span></h3>
                    </div>
                    <div className="flex flex-row">
                        <div className="">
                            <Link href="/produtos">

                                <button className="border-solid border-amber-600 bg-amber-600 rounded-full border-2 text-center p-2 pl-4 pr-4 text-white hover:bg-transparent text-xl font-bold hover:font-bold hover:text-amber-600 mr-10 mt-4">
                                    <div class="flex align-middle">
                                        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p className="ml-2">Previous</p>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <button className="border-solid border-amber-400 bg-amber-400 rounded-full ml-10 border-2 text-center mt-4 p-2 pl-4 pr-4 text-white hover:bg-transparent text-xl font-bold hover:font-bold hover:text-amber-400" onClick={() => criarCarrinho()}>Add to cart</button>
                        </div>
                    </div>
                    <div className="ml-28  p-2 pt-5 w-[140px]">

                        <h1 className="text-center  bg-green-500 border-green-500 text-white font-semibold rounded"> {carrinho.mesage} </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    return {
        props: { id: context.query.id }, // will be passed to the page component as props
    }
}