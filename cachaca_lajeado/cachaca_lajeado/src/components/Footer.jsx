import { FaWhatsapp, FaInstagram, FaEnvelope} from "react-icons/fa"

const Footer = () => {
    return (

<footer className="w-full bg-gray-900 text-white py-6">
    <div className="flex flex-col items-center">
        <p className="text-lg mb-4">&copy;2025 Todos os direitos reservados</p>
        <div className="flex space-x-6">

            <a 
             href="https://wa.me/seunumero"
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white text-3xl hover:text-green-400">
            <FaWhatsapp />
            </a>

        <span className="text-sm mt-1">(xx)xxxx-xxxx</span>

            <a 
             href="https://instagram.com/seuinstagram"
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white text-3xl hover:text-pink-400">
            <FaInstagram />
            </a>

            <span className="text-sm mt-1">@seuinsta</span>

            <a 
                href="mailto:seuemail@email.com"
                className="text-white text-3xl hover:text-blue-400">

            <FaEnvelope />
            
            </a>
            <span className="text-sm mt-1">seuemail@email.com</span>
        </div>

    </div>
    </footer>

    )
}

export default Footer;