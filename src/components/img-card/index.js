import React from 'react';
import Image from 'next/image';
import CardFooter from '../footer-card';

const CardImg = (props) => {
  const ghostLabel = 'Ghost'
  const ghostAvatar = 'https://img1.pnghut.com/21/11/16/88Y8TkESCT/avatar-antler-monochrome-photography-silhouette-computer-software.jpg'

  let userLabel = props.user.name
  let userAvatar = props.user.avatar_url

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-xs pb-2 ">

      <Image
        src={userAvatar ? userAvatar : ghostAvatar}
        alt="Usuário"
        width={160}
        height={160}
        className="rounded-full p-1 
        border-2 border-white shadow-inner shadow-white"/>

      <p className="text-center text-white text-sm bg-slate-800 py-1 px-4 my-2 rounded-full"
      >{userLabel ? userLabel : ghostLabel}</p>

      <CardFooter
        repos={props.user.public_repos}
        followers={props.user.followers}
        following={props.user.following} />

    </div >
  );
};

export default CardImg;
