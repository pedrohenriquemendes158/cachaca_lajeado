import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButton from "../components/FloatingButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
    {
        id: 1,
        name:"cachaça Premium",
        image:"/image/cachaca.jpg",
        description:"Envelhecida em barril de carvalho",
    },

    {
        id: 2,
        name:"Cachaça Ouro",
        image:"/image/cachaca.jpg",
        description:"Envelhecida em barril de carvalho",

    },
    {
        id: 3,
        name:"Cachaça Tradicional",
        image:"/image/cachaca.jpg",
        description:"Envelhecida em barril de carvalho",
    },
]


const Home = () => {
    
    return (
        

    <div className="w-full">
        <Header />
        <FloatingButton />


<section className="h-[400px]">

    <Swiper 
     modules={[Navigation, Pagination, Autoplay]}
     navigation
     pagination={{clickable:true}}
     autoplay={{delay:3000}}
     loop
     className="h-full"
     >

      <SwiperSlide>
        <div className="h-full bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{backgroundImage:"url('/image/banner.jpg')"}}>
            <h1 className="text-4xl  font-bold bg-opacity-50 p-4 rounded-lg">
                Descubra o sabor da cachaça Lajeado
            </h1>
        </div>
        </SwiperSlide>
         
     </Swiper>
</section>

    <section className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
            Nossas Cachaças
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                  <div key={product.id} className="relative group cursor-pointer">
                  <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg group-hover:opacity-50 transition duration-300" />

             <div className=" absolute inset-0 flex flex-col items-center justify-center opacity-0 
                group-hover:opacity-75 transition duration-300 bg-green-800 bg-opacity-50  text-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>

             </div>
        </div>
                
           ))} 
        </div>
    </section>

      
        <Footer />  
    </div>
    );
  };
  
  export default Home;
  