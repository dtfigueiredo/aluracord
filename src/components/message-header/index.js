import React from 'react';
import Image from 'next/image';
import moment from 'moment';

const MessageHeader = (props) => {

  return (
    <div className="w-4/5 p-2 mb-1 flex justify-start items-center rounded-lg relative">

      <Image
        src={`https://github.com/${props.newMessage.user}.png`}
        alt="User Avatar"
        width={48}
        height={48}
        className="rounded-full" />

      <div className="flex flex-col ml-4 justify-center items-start">
        <p
          className="text-base font-bold text-gray-100"
        >{props.newMessage.user}</p>

        <p
          className="text-xs text-center text-gray-100"
        >{moment(props.newMessage.created_at).format('DD/MM/YY - HH:mm:ss')}</p>
      </div>
    </div>
  );
};

export default MessageHeader;
