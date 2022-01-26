import React from 'react';
import CardFooter from '../footer-card';

const CardImg = (props) => {

  let userLabel = ''
  let userAvatar = ''
  if (props.user.length === 0) {
    userLabel = 'Ghost'
    userAvatar = 'https://img1.pnghut.com/21/11/16/88Y8TkESCT/avatar-antler-monochrome-photography-silhouette-computer-software.jpg'
  } else {
    userLabel = props.user.name
    userAvatar = props.user.avatar_url
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-xs pb-2 ">

      <img alt="Avatar de usuário"
        src={userAvatar}
        className="rounded-full w-40 h-40 mb-2 p-1 
        border-2 border-white shadow-inner shadow-white"/>

      <p className="text-center text-white text-sm bg-slate-800 py-1 px-4 mb-2 rounded-full"
      >{userLabel}</p>

      <CardFooter
        repos={props.user.public_repos}
        followers={props.user.followers}
        following={props.user.following} />

    </div >
  );
};

export default CardImg;
