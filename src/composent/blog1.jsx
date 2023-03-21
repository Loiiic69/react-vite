import React from 'react';
import Vape from "/public/img/vape.jpg"

function Blog() {
 return (
   <div className="w-screen h-screen text-white" style={{
     background: "linear-gradient(90deg, rgba(131, 126, 226, 1) 24%, rgba(114, 114, 226, 1) 58%, rgba(0, 212, 255, 1) 100%)"
   }}>
     <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
       <img class="lg:w-2/6 md:w-2/6 w-2/6 mb-1 object-cover object-center" alt="vape" src={Vape} />
       <div class="text-center lg:w-5/12 w-full">
         <h1 className="my-4 text-5xl font-bold leading-tight">
           La VAPE, une bonne option pour arreter de fumer ?
         </h1>
         <p className="text-2xl mb-8">
           Découvrez notre article sur la question posé si dessus !
         </p>
         <div className="flex justify-center mx-auto">
           <button
             className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
             Voir l'article
           </button>
           <button
             className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
             Boutique
           </button>
         </div>
       </div>
     </div>
   </div >
 );
}

export default Blog