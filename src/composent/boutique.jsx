import React from "react";

export function Boutique() {
  return (
    <div>
      <img
        src="/public/img/clope1.jpg"
        alt=""
        className="h-52 w-full object-fill"
      />
      <div className="text-center my-2">
        <strong>VAPORESSO | Kit Gen S</strong>
        <p className="">Le Kit Gen-S réunit le clearomiseur NRG-S et la box Gen-S de Vaporesso.</p>
        <p className="font-bold text-lg italic my-2">50,90€</p>
        <button className="hover:bg-slate-700 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
          Voir plus
        </button>
      </div>
      <div className="text-center my-2">
        <strong>VAPORESSO | Kit Gen S</strong>
        <p className="">Le Kit Gen-S réunit le clearomiseur NRG-S et la box Gen-S de Vaporesso.</p>
        <p className="font-bold text-lg italic my-2">50,90€</p>
        <button className="hover:bg-slate-700 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">
          Voir plus
        </button>
      </div>
    </div>
    
  );
}