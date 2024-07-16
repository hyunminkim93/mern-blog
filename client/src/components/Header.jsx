import { Link } from "react-router-dom";
import { FaSun, FaBars } from "react-icons/fa";

export default function Header() {
    return (
        <header id="header" className="w-full p-3 flex items-center fixed bg-white border-b">
            <div className="container max-w-screen-2xl mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-['Thunder'] uppercase">hyunmin's blog</h1>
                <nav className="flex">
                    <ul className="flex gap-5 justify-center font-['Roboto'] text-xl">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/signIn">Sign In</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    <button className="mr-4"><FaSun className="text-2xl" /></button>
                    <button>
                        <FaBars className="text-2xl" />
                    </button>
                </div>
            </div>
        </header>
    );
}
