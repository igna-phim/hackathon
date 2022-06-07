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
            {todosOsProdutos.map((e) =>
            //    <Link href="/${}">
               <div >
                    <div style={{
                        backgroundImage: `url(${e.imagem})`, height: "10vh", width: "10vw",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} onClick={() => verProduto(e._id)}>
                    </div>
                    <div>
                        <h1>nome: {e.name}</h1>
                        <h3>descricao: {e.description}</h3>
                        <h3>preco: {e.price}</h3>
                    </div>
                </div>
                // </Link>
            )}
        </div>

    )
}