import Header from "../components/Header"
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";


const About = () => {
    return (
     <div className="">
      <Header />
      <FloatingButton />
      
        <h1 className="text-4xl font-bold mb-8">Sobre Nós</h1>
        <p className="text-lg">Conheça a História da cachaça
        Bem-vindo à Cachaça Lajeado, onde tradição e qualidade se encontram para oferecer a você uma experiência única.
         Produzimos nossas cachaças com cuidado artesanal, utilizando os melhores ingredientes 
        e seguindo técnicas passadas de geração em geração.

Nossa história começa no coração do Brasil, onde a cana-de-açúcar é 
cultivada com dedicação e transformada em uma bebida rica em sabor e autenticidade. 
Cada garrafa de Cachaça Lajeado carrega consigo o sabor inconfundível da tradição e o respeito pelo processo artesanal.

Trabalhamos para levar até você uma cachaça de excelência, seja para degustar momentos 
especiais ou presentear alguém querido. Nossa missão é valorizar a cultura da cachaça e proporcionar a melhor
 experiência para os nossos clientes.

Venha conhecer nossos produtos e descubra o verdadeiro sabor da cachaça artesanal!


Nossa história começa no coração do Brasil, onde a cana-de-açúcar é 
cultivada com dedicação e transformada em uma bebida rica em sabor e autenticidade. 
Cada garrafa de Cachaça Lajeado carrega consigo o sabor inconfundível da tradição e o respeito pelo processo artesanal.

Trabalhamos para levar até você uma cachaça de excelência, seja para degustar momentos 
especiais ou presentear alguém querido. Nossa missão é valorizar a cultura da cachaça e proporcionar a melhor
 experiência para os nossos clientes.

Venha conhecer nossos produtos e descubra o verdadeiro sabor da cachaça artesanal!

        </p>

        
        <article className="container mx-auto px-4 py-10">
    <div className="relative">

    <img  
    src="/image/fabrica2.jpg" 
    alt="Cachaça"
    className="fixed-left w-1/3 rounded-lg shadow-lg ml-4" 
    />
    <p className="clear-left mt-6 text-center text-lg text-gray-700">   A Cachaça Lajeado é produzida em um ambiente privilegiado, cercado por montanhas, 
            riachos cristalinos e uma vegetação exuberante. Nossa destilaria combina tradição e 
            tecnologia para garantir a mais alta qualidade, respeitando o tempo de maturação e 
            mantendo os aromas naturais da cana-de-açúcar.</p>

<img  
    src="/image/fabrica.jpg" 
    alt="Cachaça"
    className="float-right w-1/3 rounded-lg shadow-lg ml-4" 
    />

    <p className="clear-right mt-6 text-center text-lg text-gray-700"> A Cachaça Lajeado é produzida em um ambiente privilegiado, cercado por montanhas, 
            riachos cristalinos e uma vegetação exuberante. Nossa destilaria combina tradição e  e 
            tecnologia para garantir a mais alta qualidade, respeitando o tempo de maturação e 
            mantendo os aromas naturais da cana-de-açúcar.
             </p>

             <img  
    src="/image/barris 1.jpg" 
    alt="Cachaça"
    className="fixed-left w-1/3 rounded-lg shadow-lg ml-4" 
    />
    <p className="clear-left mt-6 text-center text-lg text-gray-700">O Envelhecimento da Cachaça

Em meio ao aroma amadeirado e à penumbra de tonéis cuidadosamente dispostos, 
acontece a magia do envelhecimento da cachaça. 
Os barris, feitos de madeiras nobres como carvalho, amburana e bálsamo, 
são responsáveis por transformar a bebida, 
suavizando seu sabor e agregando notas complexas de baunilha, 
frutas secas e especiarias.

Cada gota repousa por anos, absorvendo lentamente as essências da madeira,
 enquanto o tempo imprime sua assinatura na coloração dourada e na textura encorpada. O resultado é uma cachaça refinada, equilibrada e digna dos paladares mais exigentes.

Degustar uma cachaça envelhecida é viajar pela tradição e pelo cuidado artesanal de sua produção, 
apreciando o encontro perfeito entre o destilado e o tempo.</p>
    </div>
</article>

        <Footer /> 
     </div>
    );
  };
  
  export default About;
  