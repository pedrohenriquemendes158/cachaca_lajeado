import Header from "../components/Header"
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

const Contact = () => {
    
return(
<div className="flex flex-col items-center justify-center">
  <Header />
  <FloatingButton />
 
    <h1 className="text-3xl font-bold mb-6">Fale Conosco</h1>
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"> 

      <div className="mb-4">
        <label className="block text-gray-700  font-semibold mb-2">Nome</label>
      <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="Seu nome"></input>
</div>
      
<div className="mb-4">
<label className="block text-gray-700 font-semibold mb-2">Email</label>
      <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="seuemail@email.com"></input>
</div>

     
<div className="mb-4">
<label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
<textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="Escreva sua mensagem..." rows="4"
></textarea>
</div>
<button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
  Enviar
</button>
    </form>

    
  <Footer />
</div>



  )
}

export default Contact;