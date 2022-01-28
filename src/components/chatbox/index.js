import React from 'react';
import MessageHeader from '../message-header';
import { FaTrash } from 'react-icons/fa';

const ChatBox = (props) => {

  return (
    //TODO ARRUMAR O OVERFLOW-Y DA LISTA DE MSG
    <div className="w-full h-5/6 overflow-y-scroll
    flex justify-between items-end mb-2 pb-1 
    bg-slate-800/40 rounded-lg">

      <ul className="w-full flex flex-col items-start">

        {props.messageList.map(newMessage => {
          return (
            <li
              key={newMessage.id}
              className="w-full sm:max-w-screen-sm
              text-white text-lg list-none
              px-2 mb-1 rounded-lg bg-cyan-600/40 hover:bg-slate-700/40">

              <div className="flex justify-between items-center">
                <MessageHeader user={newMessage.user} />

                <button
                  onClick={() => props.filteredMessageList(newMessage.id)}
                  className="p-2 rounded-lg hover:bg-cyan-600">
                  <FaTrash />
                </button>
              </div>

              <span className="px-2">{newMessage.text}</span>
            </li>
          )
        })}

      </ul>
    </div>
  );
};

export default ChatBox;