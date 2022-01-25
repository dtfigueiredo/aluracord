import React from 'react';

const Forms = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center m-4">
      <input type="text" placeholder="Digite seu usuário Github"
        className="w-full py-2 mb-2
        text-center text-slate-900
        outline-none rounded-lg border border-transparent
        placeholder:text-center"/>

      <button
        className="w-full
        bg-cyan-500 text-gray-50 font-bold
        outline-none rounded-lg py-2
        hover:bg-cyan-900
        active:bg-cyan-700
        transition duration-300 ease-out hover:ease-in"
      >Fazer Login?</button>
    </div>
  );
};

export default Forms;
