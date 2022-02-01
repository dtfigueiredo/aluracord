import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import MessageHeader from '../message-header'

const ChatBox = (props) => {

  return (
    <div className="w-full h-full overflow-y-scroll
    flex flex-col-reverse bg-slate-800/40 rounded-lg">

      <ul className="flex-1 flex flex-col-reverse">
        {/* map que recebe o array de mensagems do backend e retorna uma li para cada registro dinamicamente */}
        {props.messageList.map(newMessage => {
          return (
            <li key={newMessage.id}
              className="w-full sm:max-w-screen-sm text-white text-lg list-none
              px-2 pb-1 mb-1 rounded-lg bg-cyan-800/80 hover:bg-slate-700/40">

              <div className="flex justify-between items-center">
                {/* cabecalho da msg: nome/foto/timestamp */}
                <MessageHeader newMessage={newMessage} />

                <button
                  onClick={() => props.filteredMessageList(newMessage)}
                  className="p-2 rounded-lg hover:bg-cyan-600">
                  <FaTrash />
                </button>
              </div>

              <span className="px-2">
                {newMessage.content.startsWith(':sticker:')
                  ? (<Image alt="sticker" width={80} height={80} src={newMessage.content.replace(':sticker:', '')} />)
                  : (newMessage.content)}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ChatBox;