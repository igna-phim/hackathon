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
        <div className="flex flex-col justify-center items-center">
            <div style={{
                backgroundImage: `url(${produtoIndividual.imagem})`, height: "10vh", width: "10vw",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div>
                <h1>nome: {produtoIndividual.name}</h1>
                <h3>descricao: {produtoIndividual.description}</h3>
                <h3>preco: {produtoIndividual.price}</h3>
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