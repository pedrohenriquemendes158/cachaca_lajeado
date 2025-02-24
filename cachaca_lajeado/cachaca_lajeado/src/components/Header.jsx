import { Link } from "react-router-dom"
const Header = () => {
    return(
<header className="bg-green-600 text-white w-full py-4 px-6 shadow-md">
<div className=" max-w-7xl max-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">Cachaça Lajeado</h1>
    <nav>
        <ul className="flex space-x-4">
            <li> <Link className="m-4 text-500 hover:underline" to="/">Início</Link></li>
            <li> <Link className="m-4 text-500 hover:underline" to="/about">Sobre</Link></li>
            <li> <Link className="m-4 text-500 hover:underline" to="/contact">Contato</Link></li>
            <li> <Link className="m-4 text-500 hover:underline" to="/products">Produtos</Link></li>
           
        </ul>
    </nav>
</div>

</header>

    )
}

export default Header;