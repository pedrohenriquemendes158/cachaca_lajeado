import { Link } from "react-router-dom"

const Header = () => {

    return(

<header className="bg-green-600 text-white  w-full  py-4 px-6 shadow-md  ">
    
<div className=" max-w-7xl max-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">Cachaça Lajeado</h1>
    
    <nav>
        <ul className="flex space-x-4">
            <li> <Link className="px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-700" to="/">Início</Link></li>

            <li> <Link className="px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-700" to="/about">Sobre</Link></li>

            <li> <Link className="px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-700" to="/contact">Contato</Link></li>

            <li> <Link className="px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-green-700" to="/products">Produtos</Link></li>
           
        </ul>
    </nav>
</div>

</header>

    )
}

export default Header;