import Header from "../components/Header"
import Footer from "../components/Footer";

const products = [
    {
      id: 1,
      name: "Cachaça Ouro",
      description: "Envelhecida em tonéis de carvalho, com sabor suave e aroma marcante.",
      price: "R$ 50,00",
      image: "/image/cachaca.jpg",
    },
    {
      id: 2,
      name: "Cachaça Prata",
      description: "Pura e cristalina, ideal para drinks e caipirinhas.",
      price: "R$ 45,00",
      image: "/image/cachaca artesanal.jpg",
    },
    {
      id: 3,
      name: "Cachaça Premium",
      description: "Blend especial com notas amadeiradas e toque frutado.",
      price: "R$ 65,00",
      image: "/image/chacaça lageado.jpg",
    },
  ];

const Products = () =>
{
    return(
        
    <div className="">
        <Header />

<div className="container mx-auto p-6">
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700">Nossos Produtos</h1>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center">

            <img src="/image/cachaça.jpg" alt="cachaça lageado"
             className="w-64 h-64 object-cover rounded-lg shadow-md" />

             <div className="md:ml-6 text-center md:text-left">

                <h2 className="text-2xl font-semibold text-gray-800">Produto</h2>
                <p className="text-gray-600 mt-2">Descrição</p>
                <p className="text-xl font-bold text-green-700 mt-4">Preço</p>

                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
                    Ver Detalhes
                </button>

                

             </div>
        </div>
    </div>
</div>

        <div className="flex flex-col min-h-screen"><Footer /></div>  
    </div>
    
    )
}

export default Products;