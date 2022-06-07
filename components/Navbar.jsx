// components/Header.tsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="px-5">
            <Link
            href="/">
                <img className="hover:cursor-pointer" src="logoFinal.png" alt="Logo" width="150px" />
            </Link>
            <h3></h3>

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