import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
    return (
        <header id="header" className="w-full p-3 flex items-center fixed bg-white border-b">
            <div className="container max-w-screen-2xl mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-['Thunder'] uppercase">hyunmin's blog</h1>
                <nav className="flex">
                    <ul className="flex gap-5 justify-center font-['Roboto'] text-1xl">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/signIn">SignUp</Link></li>
                        <li><Link href="/signUp">SignIn</Link></li>
                    </ul>
                </nav>
                <button><FaSun className="size-7" /></button>
            </div>
        </header>


    )
}
