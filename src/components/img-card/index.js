import React from 'react';

const CardImg = (props) => {
  return (
    <div className="flex flex-col justify-center items-center
    w-full max-w-xs pb-2 ">

      <img alt="Avatar de usuário"
        src={`https://github.com/${props.user}.png`}
        className="rounded-full w-40 h-w-40 mb-2 p-1 
        border-2 border-white shadow-inner shadow-cyan-500"/>

      <p className="text-center text-white text-sm bg-slate-800 py-1 px-4 rounded-full"
      >{props.user}</p>

    </div>
  );
};

export default CardImg;
