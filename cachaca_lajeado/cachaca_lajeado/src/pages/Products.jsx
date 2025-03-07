import Header from "../components/Header"
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";


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
      image: "/image/cachaca-artesanal.jpg",
    },
    {
      id: 3,
      name: "Cachaça Premium",
      description: "Blend especial com notas amadeiradas e toque frutado.",
      price: "R$ 65,00",
      image: "/image/cachaca-lageado.jpg",
    },
    {
        id: 4,
        name: "Cachaça Premium",
        description: "Blend especial com notas amadeiradas e toque frutado.",
        price: "R$ 65,00",
        image: "/image/cachaca-lageado.jpg",
      },
      {
        id: 5,
        name: "Cachaça Premium",
        description: "Blend especial com notas amadeiradas e toque frutado.",
        price: "R$ 65,00",
        image: "/image/cachaca-lageado.jpg",
      },
      {
        id: 6,
        name: "Cachaça Premium",
        description: "Blend especial com notas amadeiradas e toque frutado.",
        price: "R$ 65,00",
        image: "/image/cachaca-lageado.jpg",
      },
  ];

const Products = () =>
{
    return(
        
    <div className="">
        <Header />
        <FloatingButton />

<div className="container mx-auto p-6">
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700">Produto Destaque</h1>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center">

            <img src={products[0].image} alt={products[0].name}
             className="w-64 h-64 object-cover rounded-lg shadow-md" />

             <div className="md:ml-6 text-center md:text-left">

                <h2 className="text-2xl font-semibold text-gray-800">{products[0].name}</h2>
                <p className="text-gray-600 mt-2">{products[0].description}</p>
                <p className="text-xl font-bold text-green-700 mt-4">{products[0].price}</p>

                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow
                 transition delay-150 duration-300 ease-in-out 
                hover:-translate-y-1 hover:scale-110 hover:bg-green-800">
                    Ver Detalhes
                </button>

                
             </div>
        </div>
    </div>

    
    <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4 text-center">Mais Produtos</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0).map((product) => (

            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg text-center">

                <img src={product.image} alt={product.name}
                className="w-48 h-48 object-cover mx-auto rounded-lg" />

                <h3 className="text-xl font-semibold text-gray-800 mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-1">{product.price}</p>

                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition 
                delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-600">
                    Ver Detalhes
                </button>

            </div>
        ))}
    </div>

    

    
    
</div>

    <Footer /> 
</div>
    
    )
}

export default Products;