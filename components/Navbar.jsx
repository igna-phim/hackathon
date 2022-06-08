// components/Header.tsx
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
    const [todosOsProdutos, setTodosOsProdutos] = useState([])


    async function MostrarTodosOsProdutosDoCarrinho() {
        const resultado = await fetch(`/api/ObterOCarrinho`)
        const json = await resultado.json()
        setTodosOsProdutos(json)
    }
    useEffect(() => {
        MostrarTodosOsProdutosDoCarrinho()
    }, [todosOsProdutos])

    return (
        <nav className="">
            <Link
                href="/">
                <img className="hover:cursor-pointer" src="logoFinal.png" alt="Logo" width="150px" />
            </Link>

            {todosOsProdutos.length === 0
                ? null
                : <Link href="/Carrinho">
                    <img src="/IconCarrinho.png" className="transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:cursor-pointer fixed w-9 right-5" />
                </Link>
            }


            {/* <Link href="/">
                <a className="hover:font-bold hover:text-sm">
                    Home
                </a>
            </Link>
            <br />
            <Link href="/produtos">
                <a className="hover:font-bold hover:text-sm">
                    Products
                </a>
            </Link>
            <br />
            <Link href="/aboutme">
                <a className="hover:font-bold hover:text-sm">
                    About Me
                </a>
            </Link>
            <br /> */}
        </nav>
    )
}