import { FaWhatsapp, FaInstagram, FaEnvelope} from "react-icons/fa"

const Footer = () => {
    return (
<footer className="w-full bg-gray-900 text-white py-6">
    <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold mb-4">Cachaça Lajeado</h2>
        <div className="flex space-x-6">

            <a href="https://wa.me/seunumero"
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white text-3xl hover:text-green-400">
            <FaWhatsapp />
            </a>

            <a href="https://instagram.com/seuinstagram"
             target="_blank" 
             rel="noopener noreferrer"
             className="text-white text-3xl hover:text-pink-400">
            <FaInstagram />
            </a>

            <a href="mailto:seuemail@email.com"
             className="text-white text-3xl hover:text-blue-400">
            <FaEnvelope />
            </a>

        </div>

    </div>
</footer>

    )
}

export default Footer;