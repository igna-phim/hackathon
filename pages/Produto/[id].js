import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProdutoIndividual({ id }) {
    const [produtoIndividual, setProdutoIndividual] = useState({})
    async function fetchProduto() {
        const resultado = await fetch(`/api/ProdutoIndividual/${id}`)
        const json = await resultado.json()
        setProdutoIndividual(json)
    }

    console.log(produtoIndividual)

    useEffect(() => {
        fetchProduto()
    }, []);


    return (
        <div className="flex flex-row justify-evenly items-center ">
            <div className="justify-self-auto" style={{
                backgroundImage: `url(${produtoIndividual.imagem})`, height: "80vh", width: "800px",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="flex flex-col ">
                <div>
                    <h1 className="m-5 text-4xl font-bold"> {produtoIndividual.name}</h1>
                </div>
                <div>
                    <h3>descricao: {produtoIndividual.description}</h3>
                </div>
                <div>
                    <h3>preco: {produtoIndividual.price}</h3>
                </div>
            </div>
            <Link href="/produtos">
                <button>Anterior</button>
            </Link>
        </div>
    )
}
export async function getServerSideProps(context) {
    return {
        props: { id: context.query.id }, // will be passed to the page component as props
    }
}