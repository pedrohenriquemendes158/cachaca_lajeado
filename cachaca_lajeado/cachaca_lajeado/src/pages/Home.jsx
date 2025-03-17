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
                Bem-Vindo à Cachaça Lajeado
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
        <h2 className="text-3xl font-bold">Descubra o sabor da cachaça Lajeado </h2>
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
                description:"Envelhecida em barris de carvalho Uma cachaça envelhecida, de sabor refinado e aroma amadeirado, com notas suaves de baunilha e especiarias. Perfeita para degustação, trazendo a harmonia entre tradição e tempo.",
            },

            {
                
                name: "Cachaça Ouro",
                image:"/image/cachaca.jpg",
                description:"Envelhecida em barris de carvalho. Teor alcoólico 40% | Sabor suave e refrescante",
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
                   group-hover:opacity-75 transition duration-300 bg-green-600 bg-opacity-50 text-white p-4 rounded-lg">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                </div>
             </motion.div>
             

        ))}

        </div>

            


<motion.section 
    initial={{opacity: 0,y:50}}
    whileInView={{opacity: 1,y:0}}
    transition={{duration:2}}
    viewport={{once:true}}
    className="container mx-auto py-10 px-4 text-center">
        <h2 className="text-3xl font-bold"></h2>
        <p className="text-gray-600 mt-4">
            Produzida com tradição e qualidade, nossa cachaça traz o melhor do sabor brasileiro.
            No coração das montanhas, onde a natureza preserva seus segredos mais valiosos, nasce a Cachaça Lajeado. 
            Produzida com maestria e respeito às tradições, cada gota carrega a essência do nosso terroir, 
            refletindo o cuidado artesanal em cada etapa do processo.

            Nossas Cachaças
            Cachaça Premium – Envelhecida em barris de carvalho, possui um aroma amadeirado 
            e um paladar suave, com notas adocicadas que encantam os apreciadores mais exigentes.
             Ideal para ser degustada pura.
            Cachaça Ouro – Com um equilíbrio perfeito entre suavidade e intensidade,
            essa cachaça traz um leve toque de baunilha e caramelo, proporcionando uma experiência única.
            Cachaça Tradicional – A essência pura da cachaça artesanal, com sabor marcante e cristalino.
            Perfeita para drinks e caipirinhas, garantindo um toque especial às suas receitas.
            Sobre o Local
            A Cachaça Lajeado é produzida em um ambiente privilegiado, cercado por montanhas, 
            riachos cristalinos e uma vegetação exuberante. Nossa destilaria combina tradição e 
            tecnologia para garantir a mais alta qualidade, respeitando o tempo de maturação e 
            mantendo os aromas naturais da cana-de-açúcar.

            Seja para apreciar em momentos especiais ou para presentear alguém com um sabor
            genuinamente brasileiro, a Cachaça Lajeado é a escolha perfeita.

            Descubra o sabor da tradição e da excelência!
        </p>

        
<article className="container mx-auto px-4 py-10">
    <div className="relative">
    <img  
    src="/image/cachaca.jpg" 
    alt="Cachaça"
    className="fixed-left w-1/4 rounded-lg shadow-lg ml-4" 
    />
    <p className="clear-left mt-6 text-center text-lg text-gray-700">   A Cachaça Lajeado é produzida em um ambiente privilegiado, cercado por montanhas, 
            riachos cristalinos e uma vegetação exuberante. Nossa destilaria combina tradição e 
            tecnologia para garantir a mais alta qualidade, respeitando o tempo de maturação e 
            mantendo os aromas naturais da cana-de-açúcar.</p>

<img  
    src="/image/cachaca.jpg" 
    alt="Cachaça"
    className="float-right w-1/3 rounded-lg shadow-lg ml-4" 
    />

    <p className="clear-right mt-6 text-center text-lg text-gray-700"> A Cachaça Lajeado é produzida em um ambiente privilegiado, cercado por montanhas, 
            riachos cristalinos e uma vegetação exuberante. Nossa destilaria combina tradição e  e 
            tecnologia para garantir a mais alta qualidade, respeitando o tempo de maturação e 
            mantendo os aromas naturais da cana-de-açúcar.
             </p>
    </div>
</article>

        <h3 className="text-3xl ">Receitas</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">

                <img src="image/caipirinha.jpg" alt="Cachaca"
                className="w-48 h-48 object-cover mx-auto rounded-lg" />

                <h3 className="text-xl font-semibold text-gray-800 mt-2">Caipirinha</h3>
                <p className="text-gray-600 mt-1">•1 limão taiti <br/> 
                •2 colheres (sopa) de açúcar <br/> •50ml de cachaça <br/> •Gelo a gosto</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <img src="image/maria-bonita.jpg" alt="Cachaca"
                className="w-48 h-48 object-cover mx-auto rounded-lg" />

                <h3 className="text-xl font-semibold text-gray-800 mt-2">Maria Bonita</h3>
                <p className="text-gray-600 mt-1">•50ml de cachaça <br/> •30ml de licor de maracujá <br/> 
                •20ml de suco de limão <br/> •10ml de mel <br/> •Gelo a gosto <br/> •1 fatia de laranja para decorar</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4 text-center">

                <img src="image/jardineira.jpg" alt="Cachaca"
                className="w-48 h-48 object-cover mx-auto rounded-lg" />

                <h3 className="text-xl font-semibold text-gray-800 mt-2">Jardineira</h3>
                <p className="text-gray-600 mt-1">•50ml de cachaça <br/> •30ml de suco de abacaxi <br/> 
                •10ml de suco de limão <br/> •15ml de xarope de gengibre <br/> •Gelo a gosto <br/> 
                •Ramos de hortelã para decorar</p>
            </div>

            </div>
        

    </motion.section>
     </motion.section>



        <Footer />  
    </div>
    );
  };
  
  export default Home;
  