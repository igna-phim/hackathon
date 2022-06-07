// components/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header >
            <h3>Header</h3>

            <Link href="/">
                Home
            </Link>
            <br />
            <Link href="/aboutme">
                About Me
            </Link>
            <br />
            <Link href="/produtos">
                Produtos
            </Link>
            <br />
        </header>
    )
}