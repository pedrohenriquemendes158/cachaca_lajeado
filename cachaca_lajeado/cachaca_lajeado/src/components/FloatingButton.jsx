import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
    return (

<a href="https://wa.me/seunumero"
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg
 hover:bg-green-600 transition duration-300">

    <FaWhatsapp size={30} />
</a>

    )
}

export default FloatingButton;