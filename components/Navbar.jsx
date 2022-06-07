// components/Header.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav >
            <h3>Header</h3>

            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            <br />
            <Link href="/produtos">
                <a>
                    Products
                </a>
            </Link>
            <br />
            <Link href="/aboutme">
                <a>
                    About Me
                </a>
            </Link>
            <br />
        </nav>
    )
}