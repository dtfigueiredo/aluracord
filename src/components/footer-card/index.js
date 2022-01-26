import React from 'react';
import { RiUserFollowFill, RiUserFollowLine } from 'react-icons/ri'
import { GoFileDirectory } from 'react-icons/go'

const CardFooter = (props) => {
  return (
    <div className="w-full flex justify-center items-center mx-auto text-white">

      <div className="flex justify-center items-center mx-2">
        <GoFileDirectory />
        <p className="ml-1">{props.repos}</p>
      </div>

      <div className="flex justify-center items-center mx-2">
        <RiUserFollowFill />
        <p className="ml-1">{props.followers}</p>
      </div>

      <div className="flex justify-center items-center mx-2">
        <RiUserFollowLine />
        <p className="ml-1">{props.following}</p>
      </div>

    </div>
  );
};

export default CardFooter;
