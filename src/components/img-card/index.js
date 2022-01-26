import React from 'react';

const CardImg = (props) => {

  let userLabel = ''
  let userAvatar = ''
  if (props.user.length === 0) {
    userLabel = 'Ghost'
    userAvatar = 'https://img1.pnghut.com/21/11/16/88Y8TkESCT/avatar-antler-monochrome-photography-silhouette-computer-software.jpg'
  } else {
    userLabel = props.user
    userAvatar = `https://github.com/${props.user}.png`
  }

  return (
    <div className="flex flex-col justify-center items-center
    w-full max-w-xs pb-2 ">

      <img alt="Avatar de usuário"
        src={userAvatar}
        className="rounded-full w-40 h-40 mb-2 p-1 
        border-2 border-white shadow-inner shadow-white"/>

      <p className="text-center text-white text-sm bg-slate-800 py-1 px-4 rounded-full"
      >{userLabel}</p>

    </div >
  );
};

export default CardImg;
