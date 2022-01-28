import React from 'react';
import Image from 'next/image'
import moment from 'moment'

const MessageHeader = (props) => {

  const messageDate = moment().format('DD/MM/YY - HH:mm:ss')

  return (
    <div className="w-4/5 p-2 mb-1 flex justify-start items-center rounded-lg">

      <Image
        src="https://github.com/dtfigueiredo.png"
        alt="User Avatar"
        width={48}
        height={48}
        className="rounded-full" />

      <div className="flex flex-col ml-4 justify-center items-start">
        <p
          className="text-base font-bold text-gray-100"
        >{props.user}</p>

        <p
          className="text-xs text-center text-gray-100"
        >{messageDate}</p>
      </div>
    </div>
  );
};

export default MessageHeader;
