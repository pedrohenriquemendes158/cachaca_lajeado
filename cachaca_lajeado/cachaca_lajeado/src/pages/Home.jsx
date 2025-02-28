import Header from "../components/Header"
import Footer from "../components/Footer"
import FloatingButton from "../components/FloatingButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";



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

            <motion.h1 

            initial={{opacity:0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 2}}
            className="text-4xl font-bold bg-opacity-50 p-4 rounded-lg"
            >
                Descubra o sabor da cachaça Lajeado
        </motion.h1>
        </div>
        </SwiperSlide>
     </Swiper>
</section>
    
<motion.section 
    initial={{opacity: 0,y:50}}
    whileInView={{opacity: 1,y:0}}
    transition={{duration:2}}
    viewport={{once:true}}
    className="container mx-auto py-10 px-4 text-center">
        <h2 className="text-3xl font-bold">Bem-Vindo à Cachaça Lajeado</h2>
        <p className="text-gray-600 mt-4">
            Produzida com tradição e qualidade, nossa cachaça traz o melhor do sabor brasileiro.
            No coração das montanhas, onde a natureza preserva seus segredos mais valiosos, nasce a Cachaça Lajeado. Produzida com maestria e respeito às tradições, cada gota carrega a essência do nosso terroir, refletindo o cuidado artesanal em cada etapa do processo.

Nossas Cachaças
Cachaça Premium – Envelhecida em barris de carvalho, possui um aroma amadeirado e um paladar suave, com notas adocicadas que encantam os apreciadores mais exigentes. Ideal para ser degustada pura.
Cachaça Ouro – Com um equilíbrio perfeito entre suavidade e intensidade, essa cachaça traz um leve toque de baunilha e caramelo, proporcionando uma experiência única.
Cachaça Tradicional – A essência pura da cachaça artesanal, com sabor marcante e cristalino. Perfeita para drinks e caipirinhas, garantindo um toque especial às suas receitas.
Sobre o Local
A Cachaça Lajeado é produzida em um ambiente privilegiado, cercado por montanhas, riachos cristalinos e uma vegetação exuberante. Nossa destilaria combina tradição e tecnologia para garantir a mais alta qualidade, respeitando o tempo de maturação e mantendo os aromas naturais da cana-de-açúcar.

Seja para apreciar em momentos especiais ou para presentear alguém com um sabor genuinamente brasileiro, a Cachaça Lajeado é a escolha perfeita.

Descubra o sabor da tradição e da excelência!
        </p>
    </motion.section>

      
<motion.section 
     initial={{opacity: 0, y: 50}}
     whileInView={{opacity: 1,y: 0 }}
     transition={{duration: 2}}
     viewport={{once:true}}
     className="container mx-auto py-10 px-4">
        
        <h2 className="text-3xl font-bol text-center mb-6">Nossas Cachaças</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {[
            {
               
                name: "Cachaça Premium",
                image:"/image/cachaca.jpg",
                description:"Envelhecida em barris de carvalho",
            },

            {
                
                name: "Cachaça Ouro",
                image:"/image/cachaca.jpg",
                description:"Envelhecida em barris de carvalho",
            },

            {
                
                name: "Cachaça Ouro",
                image:"/image/cachaca.jpg",
                description:"Envelhecida em barris de carvalho",
            },
        ].map((product,index) => (
            <motion.div
             key={index}
             initial={{opacity:0, y: 50}}
             whileInView={{opacity: 1,y: 0}}
             transition={{duration: 0.9, delay: index * 0.2}}
             viewport={{once:true}}
             className="relative group cursor-pointer">
                <img
                src={product.image}
                alt={product.name}

                className="w-full h-60 object-cover rounded-lg group-hover:opacity-50 transition duration-300" />
                <div className="absolute inset-0 flex flex-col intems-center justify-center opacity-0 
                   group-hover:opacity-75 transition duration-300 bg-green-700 bg-opacity-50 text-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                </div>
             </motion.div>

        ))}

        </div>
     </motion.section>

        <Footer />  
    </div>
    );
  };
  
  export default Home;
  